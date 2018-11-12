import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import routes from "./app.router";

import { AboutModule } from "./about/about.module";
import { BoardModule } from "./board/board.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DataService } from "./data.service";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { environment } from "../environments/environment";
import { FooterComponent } from "./footer/footer.component";
import { AuthGuard } from "./core/auth.guard";
import { AuthService } from "./core/auth.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AboutModule,
    BoardModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, "nc-firebase"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [DataService, AuthGuard, AuthService]
})
export class AppModule {}
