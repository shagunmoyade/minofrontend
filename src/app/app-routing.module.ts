import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full/full-layout.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', component: SignupComponent },
  // { path: 'superadmin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthGuard]},
  //{ path: 'salesforce/:id', loadChildren: () => import('./salesforce/salesforce.module').then(m => m.SalesforceModule)},



  //{ path: 'notfound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },

  //{ path: '**', redirectTo: '/notfound' },


  {
    path: 'layout',
    component: FullLayoutComponent,
    children: [
      { path: 'superadmin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule), canActivate: [AuthGuard] },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
      { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule), canActivate: [AuthGuard] },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
