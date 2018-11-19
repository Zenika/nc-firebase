import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from "rxjs";
import { take, map } from "rxjs/operators";
import { auth, User } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public authenticated$: Observable<boolean>;
  public user$: Observable<User>;
  constructor(private afa: AngularFireAuth) {
    this.user$ = of();
    this.authenticated$ = of(true);
  }

  signInWithGoogle() {
    // TODO
    return new Promise(resolve => resolve({}));
  }
  logout() {
    // TODO
    return new Promise(resolve => resolve({}));
  }
}
