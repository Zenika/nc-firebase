import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: BoardComponent },
];

export default routes;
