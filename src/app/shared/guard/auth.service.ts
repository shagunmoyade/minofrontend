import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    // your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
    // this.token = null;
  }

  getToken() {
    localStorage.getItem('token');
  }

  isAuthenticated() {
    if( localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
    // here you can check if user is authenticated or not through his token
  }
}
