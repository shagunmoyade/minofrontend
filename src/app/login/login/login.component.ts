import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialerService } from 'app/shared/services/dialer/dialer.service';
import { RoleService } from 'app/shared/services/role/role.service';
import { AuthService } from 'app/shared/services/MINO/auth.service';
import { SocketioService } from 'app/shared/services/MINO/socketio.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DialerService, RoleService]
})
export class LoginComponent implements OnInit {

  submitted= false

  // --------------------- Variables ---------------------------------------------//
  loginForm: FormGroup;
  payload = {};
  Email: string = '';
  Password: string = '';
  Role: string;
  message: string;
  invalidPassword = false;
  // -----------------------------------------------------------------------------//

  // ------------------------------- Constructor ---------------------------------//
  constructor(
    // private toastrService: ToastrService,
    private snackBar: MatSnackBar,
    public router: Router,
    private service: AuthService,
    private fb: FormBuilder,
    private _location: Location,
    private RoleService: RoleService,
    private socketioService: SocketioService
  ) {

    // To initialize FormGroup
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  get f(){
    return this.loginForm.controls
  }
  // -----------------------------------------------------------------------------//

  ngOnInit() {
    // const token = this.service.getToken();
    // if (token) {
    //   this.backClicked();
    // }
  }

  backClicked() {
    const route = this.RoleService.checkRoutes();
    this.router.navigate([route]);
  }

  login(value) {
//console.log(value);
this.submitted = true;
if (this.loginForm.invalid) {
    return;
}
this.service.login(value).subscribe((res:any) =>{
  //console.log(res);
  if(res.status == true){
    localStorage.setItem('data',btoa(JSON.stringify(res['userData']['isSuperAdmin'])))
    localStorage.setItem('Userid',btoa(JSON.stringify(res['userData']['_id'])))
    localStorage.setItem('token', res['access_token'])
    localStorage.setItem('userName', res['userData']['fullname'])
    localStorage.setItem('imageurl', res['userData']['image_url'])


  //   if(res['userData']['socketConnected'] == false){
  //     this.socketioService.connecttoSocketio(res['userData']['_id'],res['userData']['socketConnected'],"hi").subscribe((res:any)=>{
  //       //console.log(res);
        
  //     })
  //     // this.connecttoSocketio(res['userData']['_id'],res['userData']['socketConnected'])
  //      }else{
  //  //console.log('connect to socket io');
  //      }
      
    if(res['userData']['isSuperAdmin'] == true){
      this.router.navigate(['/layout/superadmin/dashboard'])
      this.service.showToaster(res.message)
    }else{
      this.router.navigate(['/layout/user/pending-todo'])
      this.service.showToaster(res.message)
    }
  
  }else{
    this.service.ErrorSuccess(res.message)
  }
})

  }



 

  recoverPassword() {
    this.router.navigate(['/login/recoverPassword']);

  }
  gotosignup() {
    this.router.navigate(['/signup'])
  }

}
