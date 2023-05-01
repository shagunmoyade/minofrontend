import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/services/MINO/auth.service';
import { SocketioService } from 'app/shared/services/MINO/socketio.service';
import { UserService } from 'app/shared/services/MINO/user.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-friends-chat',
  templateUrl: './friends-chat.component.html',
  styleUrls: ['./friends-chat.component.scss']
})
export class FriendsChatComponent implements OnInit {
  friendList:any = []
baseURL = environment.URL

  constructor(private authservice : AuthService,private service :UserService,private route: Router,private socketio :SocketioService ,  private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getallfriends()
       this.socketio.currentMessage.subscribe(message => {
      if(message == "Count"){
        this.getallfriends()
      }
    });
  }
  
  getallfriends(){
    this.service.getallfriendsforchat().subscribe(res => {
// //console.log(res);
if(res['status'] ==true){
this.friendList = res['data']
}else{
  this.friendList = []
}
    })
  }

  personalChat(value){
    // //console.log(value);
    this.route.navigate(['layout/user/personal-chat'], {
      queryParams: { ...value },
    } )
  }



}
