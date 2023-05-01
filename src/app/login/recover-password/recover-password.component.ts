import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
//import { MyAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
// import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from 'app/shared/services/role/role.service';

import { DialerService } from 'app/shared/services/dialer/dialer.service';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
  providers: [DialerService]
})
export class RecoverPasswordComponent implements OnInit {
  
// --------------------- Variables ---------------------------------------------//
passwordRecoveryForm: FormGroup;
Email:string='';
Password:string='';
mailSentStatus = false;
message:string;
invalidPassword= false;
invalidEmail=false;
// -----------------------------------------------------------------------------//
// ------------------------------- Constructor ---------------------------------//
    constructor(
      // private toastrService: ToastrService,
      private snackBar: MatSnackBar,
      public dialog: MatDialog,
      public router: Router,
      private service: DialerService,
      private fb: FormBuilder,
      private RoleService: RoleService,
      public prismService: DialerService
            ) {
                  // To initialize FormGroup
    this.passwordRecoveryForm = fb.group({
      'Email':['', Validators.required]
      },{ validator: this.checkEmail });
    }

// -----------------------------------------------------------------------------//

ngOnInit() {
  // window.addEventListener("beforeunload", function (e) {
  //   var confirmationMessage = "\o/";
  //   // //console.log("cond");
  //   e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  //   return confirmationMessage;              // Gecko, WebKit, Chrome <34
  // });
  const token = this.service.getToken();
  if(token) {
    this.backClicked();
  }
}

backClicked() {
  // 
  const route = this.RoleService.checkRoutes();
  this.router.navigate([route]);
}



    recoverPassword(form:NgForm){
      // // 
      // //console.log(form);
      // const link = `${environment.PortalUrl}/#/changePassword`
      // const post = {
      //   username: form['Email'],
      //   url: link
      // }
      // this.service.recoverPassword(post).subscribe(data => {
      //   // //console.log(data);
      //   this.mailSentStatus = true;
      //   const dialogRef = this.dialog.open(DialogtoLoginComponent, {
      //     width: '490px',
      //     height: '355px'
      //   })
      //   // this.service.showToaster(this.message);
      // },error=>{
      //   this.message = error['error']['errorMessage'];
      //   // this.service.ErrorSuccess(this.message);
      //   this.invalidEmail = true;
      // })
    }

    // ------------------------------- Validator --------------------------------//

    checkEmail(form:FormGroup) {
      let enteredEmail = form.get('Email');
      let emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (enteredEmail.errors == null || 'invalid' in enteredEmail.errors) {
      if (!enteredEmail.value.match(emailCheck)){
        enteredEmail.setErrors({ invalid: true });
      } else{
            enteredEmail.setErrors(null);
          } 
        }
    }

    login(){
      this.router.navigate(['/login']);
    }
// -----------------------------------------------------------------------------//

}
