import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(public afAuth: AngularFireAuth, private router: Router, private zone:NgZone) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      this.user = user;
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
      console.log('login success');
      this.redirect('/')
    });
  }
  logout() {
    this.afAuth.auth.signOut().then(()=>{
      console.log('logout success');
      this.redirect('/about')
    });
  }

  redirect(url) {
    this.zone.run(() => { 
      this.router.navigate([url]);
    });
  }

}
