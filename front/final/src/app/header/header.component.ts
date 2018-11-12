import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: any;
  user: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
    })
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
