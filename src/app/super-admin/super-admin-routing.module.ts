import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';


const routes: Routes = [{
  path:'dashboard',
  component: SuperAdminDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
