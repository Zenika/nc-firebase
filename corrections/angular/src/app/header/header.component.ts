import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { AuthService } from "../core/auth.service";

@Component({
  selector: "z-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  user: firebase.User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  login() {
    this.authService.signInWithGoogle().then(() => {
      this.redirect("/");
    });
  }
  logout() {
    this.authService.logout().then(() => {
      this.redirect("/about");
    });
  }

  redirect(url) {
    this.zone.run(() => {
      this.router.navigate([url]);
    });
  }
}
