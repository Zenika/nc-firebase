import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import routes from './app.router';

import { AboutModule } from './about/about.module';
import { BoardModule } from './board/board.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AboutModule,
    BoardModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
