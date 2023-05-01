import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'app/material/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 2500,
          positionClass: 'toast-top-right',
          preventDuplicates:false
        }),
        LoginRoutingModule],
        entryComponents:[],
    declarations: [
      LoginComponent,
      RecoverPasswordComponent,
    ] // MyAlertDialogComponent
})
export class LoginModule {}
