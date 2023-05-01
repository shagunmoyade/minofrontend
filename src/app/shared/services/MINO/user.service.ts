import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.URL
  constructor(private http : HttpClient,private toastrService : ToastrService) { }



  /////todo///////
  addTodo(post){
return this.http.post(`${this.baseURL}/todo/addTodo`,post)
  }

  UpdateTodo(post){
    return this.http.post(`${this.baseURL}/todo/updateTodobyId`,post)
      }
  getpendingTodo(count,page){
    return this.http.get(`${this.baseURL}/todo/getAllPendingTodo?count=${count}&page=${page}`)
      }
  getCompleteTodo(count,page){
    return this.http.get(`${this.baseURL}/todo/getAllCompleteTodo?count=${count}&page=${page}`)
      }
  getInrogressTodo(count,page){
    return this.http.get(`${this.baseURL}/todo/getAllInrogressTodo?count=${count}&page=${page}`)
      }
  getTodobyid(id){
    return this.http.get(`${this.baseURL}/todo/getTodobyId?id=${id}`)
      }
  deleteTodo(id){
    return this.http.post(`${this.baseURL}/todo/deleteTodo?id=${id}`,'')
      }
  changeStatus(post){
    return this.http.post(`${this.baseURL}/todo/updateStatus`,post)
      }


////////////////// friends api ///////////////////

  searchFriend(search){
    return this.http.get(`${this.baseURL}/friends/searchfriend?search=${search}`)
      }
  getFriendbyid(id){
    return this.http.get(`${this.baseURL}/friends/getuserbyid?id=${id}`)
      }
  sendFriendRequest(id){
    return this.http.post(`${this.baseURL}/friends/sendfriendrequest?id=${id}`,'')
      }
  getsentrequest(count,page){
    return this.http.get(`${this.baseURL}/friends/getsentrequest?count=${count}&page=${page}`)
      }
  getreciverrequest(count,page){
    return this.http.get(`${this.baseURL}/friends/getrecivedrequest?count=${count}&page=${page}`)
      }
  acceptrequest(id){
    return this.http.get(`${this.baseURL}/friends/acceptrequest?id=${id}`)
      }
  rejectrequest(id){
    return this.http.get(`${this.baseURL}/friends/rejectrequest?id=${id}`)
      }
  getallfriends(count,page){
    return this.http.get(`${this.baseURL}/friends/getallmyfriends?count=${count}&page=${page}`)
      }
      getallfriendsforchat(){
        return this.http.get(`${this.baseURL}/friends/getallmyfriendsforchat`)
          }

//////////////////// chat Api ///////////////////////
getchatbyid(friendid){
  return this.http.get(`${this.baseURL}/chat/getmsgbyfriendid?id=${friendid}`)
    }
    updatestatus(friendid){
      return this.http.get(`${this.baseURL}/chat/updateseenstatusbyreciverid?id=${friendid}`)
        }

      
        

/////// user profile api //////
getprofiledata(){
  return this.http.get(`${this.baseURL}/action/getprofiledetails`)
    }

    updateprofiledata(data){
      return this.http.post(`${this.baseURL}/action/updateprofiledetails`,data)
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
