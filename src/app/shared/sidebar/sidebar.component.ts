import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { SuperAdminROUTES } from "./super-admin-routes.config";
import { USERROUTES } from "./user-router.config";
import { environment } from 'environments/environment';



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ['./sidebar.component.scss'],
  animations: customAnimations,
})
export class SidebarComponent implements OnInit {

  @ViewChild('toggleIcon', { static: false }) toggleIcon: ElementRef;
  public menuItems: any = [];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/images/ThePipelineGroup.png';
  public config: any = {};
baseURL = environment.URL
  Status = '';
  contactData: any;
  accessToken: any;
  userDetails: any = {};
  URL = '';
  imagURL:any
  userName:any
  constructor(
    public translate: TranslateService,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
  }


  ngOnInit() {
    this.userName =  localStorage.getItem('userName')

    this.imagURL = localStorage.getItem('imageurl')
    let data = localStorage.getItem('data')
    let data2 = JSON.parse(atob(data))
  if(data2 == true){
    this.menuItems = SuperAdminROUTES;
  }else{
    this.menuItems= USERROUTES
  }
    
    // let URL = this.router.url;
    // const splittedArray = this.URL.split('/');
    // if (splittedArray[2] == 'salesforceInitial'){
    //   let token = splittedArray[3];
    //   this.service.verifytoken(token).subscribe(res => {
    //     if (res['success']) {
    //       alert('success' + JSON.stringify(res));
    //       localStorage.setItem('token', token);
    //       localStorage.setItem('oauthToken', res['User']['oauthToken']);
    //       localStorage.setItem('refreshToken', res['User']['refreshToken']);
    //       localStorage.setItem('role', res['User']['Role']);
    //       localStorage.setItem('Status',res['User']['Status']);
    //       localStorage.setItem('userName', res['User']['username']);
    //       localStorage.setItem('userId', res['User']['_id']);
    //     } 
    //   }, err => {
    //   });
    // }
    // /*THE CODE WHICH IS HERE FOR STATUS
    //    IS NOW UNDER statusFunction()*/    
    // // setTimeout(() => {
    // //   this.statusFunction();
    // //   this.changeSideBarMenu();
    // // }, 2000);
    
  }
//   statusFunction() {
//     let userId = localStorage.getItem('userId');
//     let role = localStorage.getItem('role');
//     // socket listeners 
//     // get agent status socket listeners 
//     this.socketservice.getStatus.subscribe(res => {
//       // debugger;
//       this.service.showToaster("Agent Status updated Successfully");
//           this.setStatus(res['Status']);
//           localStorage.setItem('Status', res['Status']);
//     });

//     // get salesRep status 
//     this.socketservice.getRepStatus.subscribe(res=>{
      
//       let status = localStorage.getItem('Status');
//       if(res['Status'] != status){
//         this.service.showToaster("SalesRep Status updaed Successfully");
//       }
//       this.setStatus(res['Status']);
//       localStorage.setItem('Status', res['Status']);
//     })

//     if(role == 'agent'){
//       this.agentService.getStatusById(userId).subscribe(res=>{
//        if(res['success']){
//          this.setStatus(res['status']);
//          localStorage.setItem('Status', res['Status']);
//        }
//       },(err)=>{
//         //console.log(err)
//       })
//     }else if(role == 'sales rep'){
//       this.agentService.getSalesRepStatusById(userId).subscribe(res=>{
//         if(res['success']){
//           this.setStatus(res['status'])
//           localStorage.setItem('Status', res['status']);
//         }
//       },(err)=>{
//         //console.log(err);
//       })
//     }
//     this.Status = localStorage.getItem("Status");
//     if (!this.Status) this.Status = 'Offline'
//     else {
//       this.Status = this.getFormattedStatus(this.Status)
//       switch (this.Status) {
//         case 'Available': break;
//         case 'Offline': break;
//         case 'OnBreak': break;
//         default:
//           //this.changeStatus('Offline') // can hit api to get status as well in place of change status
//           this.Status = 'Offline'; //explitly setting status as Offline
//           break;
//       }
//     }
//   }
//   changeSideBarMenu() {
//     let role = localStorage.getItem('role');
//     if (role == 'pipelineAdmin') {
//       this.menuItems = ROUTES;
//     }
//     else if (role == 'VerificationAgent') {
//       this.menuItems = VERAgentROUTES;
//     }

//     else if (role == 'agent') {
//       this.menuItems = AGENTROUTES;
//       this.setStatus(this.Status);
//     }

//     else if (role == 'admin' || role == 'manager') {
//       this.menuItems = SFAdminRoutes;
//       //this.setStatus(this.Status);
//     }
//     else if (role == 'sales rep' ) {
//       this.menuItems = SFROUTES;
//       /*var count = 0;
//       this.menuItems.forEach(element => {
//         if (element.title == 'Ongoing calls') {
//           count = +1;
//         }

//       });

//       if (count == 0) {
//         var menu = {
//           path: '/layout/salesforce/onCalls',
//           title: 'Ongoing calls',
//           icon: 'fa fa-phone',
//           class: '',
//           badge: '',
//           badgeClass: '',
//           isExternalLink: false,
//           submenu: []
//         }
//         this.menuItems.push(menu)
//       }*/
//     }else{}
//   }  


//   // set side bar status avinash
//   setStatus(status) {
//     if (status == 'Available') {
//       this.menuItems[0].badgeClass = " badge badge-pill badge-success float-right mr-1 mt-1 blink_me ";
//       this.menuItems[0].title = status;
//     }
//     else if (status == 'OnBreak') {
//       this.menuItems[0].badgeClass = "badge badge-pill badge-warning float-right mr-1 mt-1 blink_me ";
//       this.menuItems[0].title = status;
//     }
//     else if (status == 'Offline') {
//       this.menuItems[0].badgeClass = "badge badge-pill badge-danger float-right mr-1 mt-1 blink_me ";
//       this.menuItems[0].title = status;
//     }
//   }

//   getFormattedStatus(status) {
//     if (status == 'Available') {
//       status = 'Available'
//     }
//     else if (status == 'On Break') {
//       status = 'OnBreak'
//     }
//     else if (status == 'Offline') {
//       status = 'Offline'
//     }
//     return status;
//   }

//   ngAfterViewInit() {
//   }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

//   // NGX Wizard - skip url change
//   ngxWizardFunction(path: string) {
//     if (path.indexOf("forms/ngx") !== -1)
//       this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
//   }
// }

}