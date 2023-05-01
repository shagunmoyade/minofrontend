import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketioService } from 'app/shared/services/MINO/socketio.service';
import { UserService } from 'app/shared/services/MINO/user.service';
import { environment } from 'environments/environment';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chat-by-id',
  templateUrl: './chat-by-id.component.html',
  styleUrls: ['./chat-by-id.component.scss']
})
export class ChatByIdComponent implements OnInit , AfterViewChecked{
@ViewChild('scrollMe') private myScrollContainer: ElementRef;
  senderID:any
  reciverID:any
  friendShipid:any
  msg:any
  friendname:any
  imgurl:any
  chat:any = []
baseURL = environment.URL

  constructor(private activatedRoute: ActivatedRoute,private socketio :SocketioService ,private service :UserService) { }

  ngOnInit(): void {
    //console.log(window.location.pathname);

this.activatedRoute.queryParams.subscribe(param => {
  const data = param
  let user = localStorage.getItem('Userid')
    this.senderID = JSON.parse(atob(user))
  this.friendname = data.name
  this.imgurl = data.image_url
  this.friendShipid =  data._id
  if(data.reciver ==  this.senderID ){
    this.reciverID = data.sender
  }else{
    this.reciverID = data.reciver
  }
})
this.getmsgbyId()
this.scrollToBottom();


this.socketio.currentMessage.subscribe(message => {
  if(message == "New"){
    this.getmsgbyId()
//     let URl =  window.location.pathname
//     if(URl == '/layout/user/personal-chat' ){
//       this.updatestatus()
// this.getmsgbyId()

//     }
  }
});




  }
  typedmsg(value){
// //console.log(value);
this.msg = value
  }

  sendmsg(){
    if(this.msg == undefined || this.msg == ""){
return
    }
    let senderName = localStorage.getItem('userName')
    let data = {
      senderId: this.senderID,
      reciverId: this.reciverID,
       message : this.msg ,
      sendername: senderName,
      friendship:  this.friendShipid,
    }
this.socketio.sendchatmessage(data)
this.getmsgbyId()
this.msg = null
  }

getmsgbyId(){
this.service.getchatbyid(this.friendShipid).subscribe(res => {
  //console.log(res);
  if(res['status'] == true){
    this.chat =  res["data"]
    // this.updatestatus()
  }
},((e) => {}),(() => {
  let datacountL:any = this.chat.filter(x => x.seen == false)
  if(datacountL.length != 0){
  this.updatestatus()
  }

}))
}

updatestatus(){
  this.service.updatestatus(this.friendShipid).subscribe(res => {
    //console.log(res);
    if(res['status'] ==  true){
      let data = {
        senderId: this.reciverID,
         message : 'seen',
      }
  this.socketio.sendseenchatmessage(data)
    }
  })
}



ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
