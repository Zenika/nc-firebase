import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { BoardComponent } from "./board/board.component";
import { AuthGuard } from "./core/auth.guard";

export const routes:Routes = [
  { path: "", component: BoardComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent },
  { path: "**", component: AboutComponent }
];
