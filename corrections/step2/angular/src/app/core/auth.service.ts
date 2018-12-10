import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";
import { auth, User } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public authenticated$: Observable<boolean>;
  public user$: Observable<User>;
  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.user;
    this.authenticated$ = this.afa.authState.pipe(
      take(1),
      map(user => !!user)
    );
  }

  signInWithGoogle() {
    return this.afa.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    return this.afa.auth.signOut();
  }
}
