import { Injectable } from '@angular/core';
import { CanActivate, Router, NavigationEnd } from '@angular/router';
import { DialerService } from '../services/dialer/dialer.service';
// import { DialerService } from '../../dialer.service';
// import { RoleService } from '../../role.service';
import { RoleService } from '../services/role/role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // authguard implements CanActive method service override
  constructor(private router: Router, private service: DialerService, private RoleService: RoleService) {

  }
  roleId;
  canActivate(): boolean {
    this.roleId = localStorage.getItem('role');
    if (this.service.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
