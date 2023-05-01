import { Component, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';
import { DialerService } from '../services/dialer.service'
import { SocketioService } from '../services/MINO/socketio.service';
import { AuthService } from '../services/MINO/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  currentLang = "en";
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  public isCollapsed = true;
  formGroup: FormGroup;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();
  notificaionCount:any
  public config: any = {};
  userName : any;
  public userType: any;
  public isUserType_2: boolean = false;
  msgCount:any
  constructor(
    private socketioService: SocketioService,
    public translate: TranslateService, private layoutService: LayoutService, private configService: ConfigService, private router: Router, private dialerService: DialerService,private socketio :SocketioService,private service : AuthService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");

  }

  ngOnInit() {
    this.getNotificationcount()
    this.getmsgNotificationcount()
    this.config = this.configService.templateConf;
    this.userName = localStorage.userName
    this.userType = localStorage.userType;
    this.isUserType_2 = this.userType == '2' ? true : false;
    let dataid = localStorage.getItem('Userid')
    let dataid2 = JSON.parse(atob(dataid))
      this.socketioService.connecttoSocketio(dataid2,"hi").subscribe((res:any)=>{
        //console.log(res);
      })
      // this.connecttoSocketio(res['userData']['_id'],res['userData']['socketConnected'])
    this.socketio.getNewMessage().subscribe(res =>{
      //console.log(res);
      if(res != ""){
   this.getNotificationcount()
      }
    })




    this.socketio.getNewChatMessage().subscribe(res =>{
      //console.log(res);
      if(res != ""){
      let URl =  window.location.pathname
        
   if(URl != '/layout/user/personal-chat'){
   this.getmsgNotificationcount()
   }
   if(URl == '/layout/user/personal-chat' ){
     this.newMessage("New")
   }else{
    this.newMessage("Count")
   }

      }
    })
    this.socketio.getNewseenChatMessage().subscribe(res =>{
      //console.log(res);
      let URl =  window.location.pathname
      // if(res != ""){
        if(URl == '/layout/user/personal-chat' ){
          this.newMessage("New")
         }
      // }
    })



  }

  newMessage(value) {
    this.socketioService.changeMessage(value)
  }

  getNotificationcount(){
    this.service.getnotificationcount().subscribe(res => {
      //console.log(res);
      if(res['status'] == true){
        this.notificaionCount = res['data']
      }else{
        this.notificaionCount =0
      }

     })
  }
  getmsgNotificationcount(){
    this.service.getmsgnotificationcount().subscribe(res => {
      //console.log(res);
      if(res['status'] == true){
        this.msgCount = res['data']
      }else{
        this.msgCount = 0
      }
     })
  }
  logout() {
    localStorage.clear();
      this.router.navigateByUrl('/login');
  }


  ngAfterViewInit() {
    if (this.config.layout.dir) {
      const dir = this.config.layout.dir;
      if (dir === "rtl") {
        this.placement = "bottom-left";
      } else if (dir === "ltr") {
        this.placement = "bottom-right";
      }
    }
  }


  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  seenotification(){
    this.notificaionCount = 0
    this.router.navigate(['layout/shared/notifications'])
  }

  seechat(){
    this.msgCount = 0
    this.router.navigate(['layout/user/friends-chating'])
  }

  profil(){
    this.router.navigate(['layout/user/profile'])

  }
}