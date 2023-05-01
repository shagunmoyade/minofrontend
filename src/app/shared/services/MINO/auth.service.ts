import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.URL;
  constructor(private http : HttpClient,private toastrService : ToastrService) { }

  login(userdata){
    return this.http.post(`${this.baseURL}/auth/login`,userdata);
  }
  signup(userdata){
    return this.http.post(`${this.baseURL}/auth/signup`,userdata);
  }
  getnotification(){
    return this.http.get(`${this.baseURL}/notifications/getallnotification`);
  }
  clearnotification(id){
    return this.http.post(`${this.baseURL}/notifications/clearnotificationt?id=${id}`,'');
  }
  clearallnotification(){
    return this.http.post(`${this.baseURL}/notifications/clearallnotificationt`,'');
  }
  getnotificationcount(){
    return this.http.get(`${this.baseURL}/notifications/getnotificationcount`);
  }
  getmsgnotificationcount(){
    return this.http.get(`${this.baseURL}/notifications/getmsgnotificationcount`);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  
  uploadAvtar(file){
    return this.http.post(`${this.baseURL}/auth/uploadavtar`,file);
  }



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

}
