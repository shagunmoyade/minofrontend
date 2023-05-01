import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketioService } from 'app/shared/services/MINO/socketio.service';
import { UserService } from 'app/shared/services/MINO/user.service';

@Component({
  selector: 'app-pending-friend-request',
  templateUrl: './pending-friend-request.component.html',
  styleUrls: ['./pending-friend-request.component.scss']
})
export class PendingFriendRequestComponent implements OnInit {
  sentRequest:any = []
  recivedRequest:any = []

  config: {
    itemsPerPage: number;
    currentPage: number;
    totalItems: any;
    id: any,
  };
  config1: {
    itemsPerPage: number;
    currentPage: number;
    totalItems: any;
    id: any,

  };
  constructor(private route: Router,private socketio :SocketioService,private service :UserService, private modalService: NgbModal, ) { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: "",
      id: "paginationgridData",
    };
    this.config1 = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: "",
      id:"paginationgridData1" 
    };
   this.getsentrequest()
   this.getrecivedrequest()

  }

  getsentrequest(){
this.service.getsentrequest(this.config.itemsPerPage, this.config.currentPage).subscribe(res =>{
  //console.log(res);
  if(res['status'] == true){
this.sentRequest = res['data']
this.config.totalItems =  res['totalcount']
  }else{
    this.sentRequest = []
  }
})
  }

  getrecivedrequest(){
    this.service.getreciverrequest(this.config1.itemsPerPage, this.config1.currentPage).subscribe(res =>{
      //console.log(res);
      if(res['status'] == true){
    this.recivedRequest = res['data']
    this.config1.totalItems =  res['totalcount']
      }else{
        this.recivedRequest = []
      }
    })
  }
  search(){
this.route.navigate(['layout/user/search-for-friend'])
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.getsentrequest()
  }
  
  pageChanged1(event) {
    this.config1.currentPage = event;
    this.getrecivedrequest()
  }

  accept(data:any){
this.service.acceptrequest(data._id).subscribe(res =>{
  //console.log(res);
  if(res['status'] == true){
this.service.showToaster('Request Accepted')
this.ngOnInit()
  }
},((e) =>{}),(() => {
  let userName = localStorage.getItem('userName')
  let resdata = {
    reciverId : data.sender,
      message: userName + ' accepted your Friend Request', 
     senderId :data.reciver,
  }
this.socketio.sendMessage(resdata)
}))
  }

  reject(data,id){
    if(id == 1){
      this.service.rejectrequest(data._id).subscribe(res =>{
        if(res['status'] == true){
          this.service.showToaster('Request Rejected')
          this.ngOnInit()
            }
      })
    }else{
      this.service.rejectrequest(data._id).subscribe(res =>{
        if(res['status'] == true){
          this.service.showToaster('Request Canceled')
          this.ngOnInit()
            }
      })
    }

  }
  
}
