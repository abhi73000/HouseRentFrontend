import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'admin') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}