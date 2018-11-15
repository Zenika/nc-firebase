import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { combineLatest, map } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {}

  getData(): Observable<any> {
    return this.getAccountsToSpy().pipe(
      combineLatest(this.getStats()),
      map(([twitters, data]) => {
        const accounts = twitters.map(t => t.handler);
        return data.map((d: any) => {
          return {
            ...d,
            twitters: Object.keys(d.twitters).reduce((acc: any, t: any) => {
              if (accounts.indexOf(t) < 0) {
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
      .collection("accounts")
      .snapshotChanges()
      .pipe(
        map(accounts => {
          return accounts.map(handler => {
            return {
              ...handler.payload.doc.data(),
              id: handler.payload.doc.id
            };
          });
        })
      );
  }

  addTwitter(handler: string): void {
    this.db.collection("accounts").add({
      handler
    });
  }

  removeTwitter(id: string): void {
    this.db
      .collection("accounts")
      .doc(id)
      .delete();
  }
}
