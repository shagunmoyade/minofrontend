import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialerService {
  invitationURl: any;
  baseURL = environment.URL;
  companyList: any;

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  // ===== Twilio ===============
  generateTwilioToken(agentId) {
    return this.http.get(`${this.baseURL}/v0.1/twilio/token?agentId=${agentId}`);
  }


  recoverPassword(arg) {
    return this.http.post(`${this.baseURL}/v0.1/auth/forgotPassword`, arg);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    if (localStorage.getItem('token') == 'undefined' || localStorage.getItem('token') === '') {
      return !!localStorage.getItem('0')
    }
    return !!localStorage.getItem('token')
  }

  checkURL(token) {
    return this.http.post(`${this.baseURL}/v0.1/auth/TokenVarifyAndAgent`, { token: token })
  }
  changePassword(newPasswordDetails) {
    return this.http.post(`${this.baseURL}/v0.1/auth/changePassword`, newPasswordDetails);
  }

  loginUser(userDetails) {
    return this.http.post(`${this.baseURL}/v0.1/auth/login`, userDetails);
  }

  logout(userId){
    return this.http.put(`${this.baseURL}/v0.1/auth/logout`,userId);
  }

  signUp(userDetails) {
    return this.http.post(`${this.baseURL}/v0.1/auth/signup`, userDetails);
  }

  //--------------------------------- VerifyJWT -----------------------------------------

  verifytoken(token) {
    return this.http.get(`${this.baseURL}/v0.1/verifyAccessToken?AccessToken=${token}`)
  }


  //----------------------------------- User Details -------------------------------
  getUserDetails() {
    return this.http.get(`${this.baseURL}/v0.1/getOneById`);
  }
  // ------------------------------- Validator --------------------------------//

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    const enteredPassword = fb.get('Password');
    // // 
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (enteredPassword.errors == null || 'invalid' in enteredPassword.errors) {
      // // 
      if (!enteredPassword.value.match(passwordCheck)) {
        enteredPassword.setErrors({ invalid: true });
      } else {
        enteredPassword.setErrors(null);
      }
    }
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      // // 
      if (enteredPassword.value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  // -----------------------------------------------------------------------------//

  //tostr notifications

  showToaster(message) {
    this.toastrService.success(message);
  }
  ErrorSuccess(message) {
    this.toastrService.error(message);
  }
  infoSuccess(message) {
    this.toastrService.info(message);
  }
  warningSuccess(message) {
    this.toastrService.warning(message);
  }

  //---------------------------------------------------------------------------//



}
