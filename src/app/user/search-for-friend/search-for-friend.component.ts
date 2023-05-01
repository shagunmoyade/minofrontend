import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketioService } from 'app/shared/services/MINO/socketio.service';
import { UserService } from 'app/shared/services/MINO/user.service';
import { environment } from 'environments/environment';
import * as ios from 'socket.io-client';

@Component({
  selector: 'app-search-for-friend',
  templateUrl: './search-for-friend.component.html',
  styleUrls: ['./search-for-friend.component.scss']
})
export class SearchForFriendComponent implements OnInit {
  searchinput:any
  searchResult:any = []
  returnn = false
  baseurl = environment.URL
  closeResult = "";
  friendDetail:any = {}
  requestid:any
  socket: any;

  constructor(public UserService: UserService, private modalService: NgbModal,private route :Router , private socketio :SocketioService ) { }

  ngOnInit(): void {
  }
  getinput(value){
    if(value.length > 2){
      this.searchinput= value 
    }else{
      this.searchinput = undefined 
      this.searchResult = []
    this.returnn = false

    }
  }
  search(){
this.UserService.searchFriend(this.searchinput).subscribe(res =>{
  if(res['status'] ==  true){
    this.UserService.showToaster('Friend Found')
    this.searchResult = res['data']
    this.returnn = true
  }else{
    this.UserService.ErrorSuccess('Friend not Found')
    this.searchResult = []
    this.returnn = false
  }
})
  }

  getFriendbyid(id,seefriend){
this.requestid = id
this.UserService.getFriendbyid(id).subscribe(res => {
  if(res['status']== true){
  this.friendDetail = res['data']
  }
})
this.modalService
.open(seefriend, { ariaLabelledBy: "modal-basic-title" })
.result.then(
  (result) => {
    this.closeResult = `Closed with: ${result}`;
  },
  (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  }
);
  }

  sendfriendrequest(){
    this.UserService.sendFriendRequest(this.requestid).subscribe(res => {
      if(res['status']== true){
        this.UserService.showToaster(res["message"]);
        this.modalService.dismissAll()
      }
    },((E) => {}),(() =>{
      // this.route.navigate(['layout/user/pending-request'])
      let user = localStorage.getItem('Userid')
      let userid = JSON.parse(atob(user))
      let userName = localStorage.getItem('userName')
      let data = {
        reciverId : this.requestid,
          message: userName + ' sent you Friend Request', 
         senderId :userid ,
      }
  this.socketio.sendMessage(data)
  
    }))
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.requestid = ""
      this.friendDetail = {}
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.requestid = ""
      this.friendDetail = {}
      return "by clicking on a backdrop";
    } else {
      this.requestid = ""
      this.friendDetail = {}
      return `with: ${reason}`;
    }
  }
  cancel(){
    this.modalService.dismissAll()
  }

  reset(){
    this.searchinput = undefined
    this.searchResult = []
    this.returnn = false
  }
}
