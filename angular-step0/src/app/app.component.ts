import { Component, OnInit } from "@angular/core";
import { AuthService } from "./core/auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.authenticated$.subscribe(
      isAuthenticated => (this.isAuthenticated = isAuthenticated)
    );
  }
}
