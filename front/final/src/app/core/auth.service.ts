import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState: Observable<any | null>;

  constructor (private afa: AngularFireAuth, private router: Router,  private zone:NgZone) {
    this.authState = this.afa.authState;
  }

  get authenticated() {
    return this.authState;
  }

  get user() {
    return of({
      displayName: "Aurélien Mocked",
      email: "aurelien.loyer@zenika.com",
      emailVerified: true
    })
    // return this.afa.authState;
  }

  login() {
    this.authState = of(true);
    this.router.navigate(['/']);

    // this.afa.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
    //   console.log('login success');
    //   this.router.navigate(['/']);
    // });
  }

  logout() {
    this.authState = of(false);
    this.router.navigate(['/about']);

    // this.afa.auth.signOut().then(()=>{
    //   console.log('logout success');
    //   this.router.navigate(['/about'])
    // });
  }

  redirect(url) {
    this.zone.run(() => {
      this.router.navigate([url]);
    });
  }
}
