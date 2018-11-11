import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map, } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.authenticated.pipe( 
      take(1),
      map(user => !!user),
      map(isAuthenticated => {        
        if(isAuthenticated) {
          return true
        }
        else {
          this.router.navigate(['/about']);
          return false;
        }
      })
    )
  }
}
