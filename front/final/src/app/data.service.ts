import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import mockedData from './data';

@Injectable()
export class DataService {

  constructor() { }

  getData(): Observable<any[]> {
    return of(mockedData).pipe(
        delay( 1000 )
    );
  }

  getAccountsToSpy(): Observable<any[]> {
    return of(['@AurelienLoyer','@EmmanuelDemey']).pipe(
        delay( 1000 )
    );
  }

}