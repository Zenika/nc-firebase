import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { combineLatest, map } from "rxjs/operators";

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) { }

  getData(): Observable<any> {
    return this.getAccountsToSpy().pipe(
      combineLatest(this.getStats()),
      map(([twitters, data]) => {
        const handlers = twitters.map(t => t.handler);
        return data.map((d: any) => {
          return {
            ...d,
            twitters: Object.keys(d.twitters).reduce((acc: any, t: any) => {
              if (handlers.indexOf(t) < 0) {
                return {
                  ...acc
                };
              }
              return {
                ...acc,
                [t]: d.twitters[t]
              };
            }, {})
          };
        });
      })
    );
  }

  getStats(): Observable<any[]> {
    return this.db.collection("stats").valueChanges();
  }

  getAccountsToSpy(): Observable<any[]> {
    return this.db
      .collection("handlers")
      .snapshotChanges()
      .pipe(
        map(handlers => {
          return handlers.map(handler => {
            return {
              ...handler.payload.doc.data(),
              id: handler.payload.doc.id
            };
          });
        })
      );
  }

  addTwitter(handler: string): void {
    this.db.collection("handlers").add({
      handler
    });
  }

  removeTwitter(id: string): void {
    this.db
      .collection("handlers")
      .doc(id)
      .delete();
  }
}
