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
    return this.db.collection("handlers").snapshotChanges();
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
