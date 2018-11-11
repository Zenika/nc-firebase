import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState: Observable<any | null>;

  constructor (private afa: AngularFireAuth) {
    this.authState = this.afa.authState;
  }

  get authenticated() {
    return this.authState;
  }
}
