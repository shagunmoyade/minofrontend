import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DialerService } from '../../dialer.service';
import { RoleService } from '../../role.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
    roleId: string;
    constructor( private router: Router, private service: DialerService, private RoleService: RoleService) {}

    canActivate(): boolean {
        this.roleId = localStorage.getItem('role');
        if (this.service.loggedIn() && (this.roleId.trim() === 'manager')) {
         return true;
        }
        const route = this.RoleService.checkRoutes();
        this.router.navigate([route]);
        return false;
      }

}
