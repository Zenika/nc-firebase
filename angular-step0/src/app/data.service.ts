import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { combineLatest, map } from "rxjs/operators";
import { Stat } from "./models/stat.model";
import { Account } from "./models/account.model";
import { Twitter } from "./models/twitter.model";

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {}

  getData(): Observable<Stat[]> {
    return this.getAccountsToSpy().pipe(
      combineLatest(this.getStats()),
      map(([twitters, data]) => {
        const accounts = twitters.map(t => t.handle);
        return data.map((d: Stat) => {
          return {
            ...d,
            twitters: Object.keys(d.twitters).reduce(
              (acc: Twitter, t: string) => {
                if (accounts.indexOf(t) < 0) {
                  return {
                    ...acc
                  };
                }
                return {
                  ...acc,
                  [t]: d.twitters[t]
                };
              },
              {}
            )
          };
        });
      })
    );
  }

  getStats(): Observable<{}[]> {
    return of([
      {
        timestamp: { nanoseconds: 467000000, seconds: 1542510183 },
        twitters: {
          EmmanuelDemey: {
            tweets: 10000,
            followers: 2020,
            following: 2269,
            likes: 5295,
            name: "EmmanuelDemey"
          }
        }
      },
      {
        timestamp: { nanoseconds: 469000000, seconds: 1542509354 },
        twitters: {
          EmmanuelDemey: {
            tweets: 11000,
            followers: 2000,
            following: 2260,
            likes: 5295,
            name: "EmmanuelDemey"
          }
        }
      }
    ]);
  }

  getAccountsToSpy(): Observable<Account[]> {
    return of([{ id: "1", handle: "EmmanuelDemey" }]);
  }

  addTwitter(handle: string): void {
    // TODO
  }

  removeTwitter(id: string): void {
    // TODO
  }
}
