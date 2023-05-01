import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RoleService {
  Role: string;
  constructor() { }

  getRole() {
    this.Role = localStorage.role;
    return this.Role;
  }

  checkRoutes() {
    const userRole = this.getRole();
    let route = '';
    switch (userRole) {
      case 'admin': route = `/layout/salesforce/home`; break;
      case 'manager': route = `/layout/salesforce/home`; break;
      case 'salesrep': route = `/layout/salesforce/home`; break;
      case 'sales rep': route = `/layout/salesforce/dialerSession`; break;
      case 'agent': route = '/layout/agent/home'; break;
      case 'pipelineAdmin': route = '/layout/cm/home'; break; //new path 
      case 'VerificationAgent': route = '/layout/var/VerificationList'; break; //new path 

    }
    return route;
  }
}

// export enum Role {
//   Manager = 'manager',
//   Admin = 'admin'
// }
