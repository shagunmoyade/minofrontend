import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/MINO/auth.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notification:any = []
  clearnoti:any=""
  closeResult = ""
  constructor(private service : AuthService,private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getNotification()
  }
  getNotification(){
    this.service.getnotification().subscribe((res : any) =>{
      //console.log(res);
      if(res['status'] == true){
        this.notification = res['data']
      }else{
        this.notification = []
      }
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.clearnoti =""
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.clearnoti =""
      return "by clicking on a backdrop";
    } else {
      this.clearnoti =""
      return `with: ${reason}`;
    }
  }

  cancel(){
    this.clearnoti =""
    this.ngOnInit();
    this.modalService.dismissAll();
  }
  clearnotificaion(content,id){
    if(id != 0){
      this.clearnoti = id
    }
      this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  sureclear(){
    if(this.clearnoti != ""){
      this.service.clearnotification(this.clearnoti).subscribe(res =>{
        if(res['status'] == true){
          this.service.showToaster('Notification Cleared');
          this.ngOnInit()
          this.modalService.dismissAll();
        }
      })
    }else{
      this.service.clearallnotification().subscribe(res =>{
        if(res['status'] == true){
          this.service.showToaster('Notification Cleared');
          this.ngOnInit()
          this.modalService.dismissAll();
        }
      })
    }
  }
}
