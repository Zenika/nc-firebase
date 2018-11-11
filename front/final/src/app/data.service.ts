import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import mockedData from './data';

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) { }

  getData(): Observable<any[]> {
    return this.db.collection('stats').valueChanges()
  }

  getAccountsToSpy(): Observable<any[]> {
    return this.db.collection('handlers').valueChanges();
  }

  getMockedData(): Observable<any[]> {
    return of(mockedData).pipe(
      delay(1000)
    );
  }

  getMockedAccountsToSpy(): Observable<any[]> {
    return of([
      { handler: '@EmmanuelDemey' },
      { handler: '@AurelienLoyer' },
    ]).pipe(
      delay(1000)
    );
  }

}
