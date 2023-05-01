import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DialerService } from '../services/dialer/dialer.service';
import { RoleService } from '../services/role/role.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
  roleId: string;
  constructor(private router: Router, private service: DialerService, private RoleService: RoleService) { }

  canActivate(): boolean {
    this.roleId = localStorage.getItem('role');
    if (this.service.loggedIn() && (this.roleId.trim() === 'agent')) {
      return true;
    }
    const route = this.RoleService.checkRoutes();
    this.router.navigate([route]);
    return false;
  }

}
