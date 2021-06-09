import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStore } from './auth.store'; 

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthStore, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.auth.isLoggedIn$
        .pipe(map(isLoggedIn => isLoggedIn ? true : this.router.parseUrl('/login')));
    }
}