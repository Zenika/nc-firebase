import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {}

  getData(): Observable<any[]> {
    return this.db.collection("stats").valueChanges();
  }

  getAccountsToSpy(): Observable<any[]> {
    return this.db.collection("handlers").valueChanges();
  }

  addTwitter(handler: string): Observable<any[]> {
    return null;
  }

  removeTwitter(handler: string): Observable<any[]> {
    return null;
  }
}
