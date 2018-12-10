import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { combineLatest, map } from "rxjs/operators";
import { Stat } from "./models/stat.model"
import { Account } from "./models/account.model";
import { Twitter } from "./models/twitter.model";

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) { }

  getData(): Observable<Stat[]> {
    return this.getAccountsToSpy().pipe(
      combineLatest(this.getStats()),
      map(([twitters, data]) => {
        const accounts = twitters.map(t => t.handle);
        return data.map((d: Stat) => {
          return {
            ...d,
            twitters: Object.keys(d.twitters).reduce((acc: Twitter, t: string) => {
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

  getStats(): Observable<{}[]> {
    return this.db.collection("stats").valueChanges();
  }

  getAccountsToSpy(): Observable<Account[]> {
    return this.db
      .collection("accounts")
      .snapshotChanges()
      .pipe(
        map(accounts => {
          return accounts.map(account => {
            return {
              ...account.payload.doc.data() as { handle:string },
              id: account.payload.doc.id
            };
          });
        })
      );
  }

  addTwitter(handle: string): void {
    this.db.collection("accounts").add({
      handle
    });
  }

  removeTwitter(id: string): void {
    this.db
      .collection("accounts")
      .doc(id)
      .delete();
  }
}
