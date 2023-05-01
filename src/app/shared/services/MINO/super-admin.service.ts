import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  baseURL = environment.URL;
  constructor(private http : HttpClient,private toastrService : ToastrService) { }

getAllUser(){
  return this.http.get(`${this.baseURL}/action/getAllUsers`)
}
activeDeactiveUser(data){
  return this.http.post(`${this.baseURL}/action/activateDeactivateUser`,data)
}
userAdminUpdate(data){
  return this.http.post(`${this.baseURL}/action/userAdminUpdate`,data)
}
userSuperAdminUpdate(data){
  return this.http.post(`${this.baseURL}/action/userSuperAdminUpdate`,data)
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
