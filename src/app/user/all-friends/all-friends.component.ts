import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/MINO/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent implements OnInit {
  config: {
    itemsPerPage: number;
    currentPage: number;
    totalItems: any;
    id: any,
  };
  friendList:any = []
  closeResult = ''
  frienddata:any= {}
  constructor(private service :UserService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: "",
      id: "paginationgridData",
    };
    this.getallfriends()
  }


  getallfriends(){
    this.service.getallfriends(this.config.itemsPerPage,this.config.currentPage).subscribe(res => {
//console.log(res);
if(res['status'] ==true){
this.friendList = res['data']
this.config.totalItems = res['totalcount']
}else{
  this.friendList = []
}
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.getallfriends()
  }

  reject(content,data){
    // console.log(data);
    this.frienddata = data
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
  sureunfriend(){
    this.service.rejectrequest(this.frienddata._id).subscribe(res =>{
      if(res['status'] == true){
        this.service.showToaster('Removed From Friends List')
    this.modalService.dismissAll()

        this.ngOnInit()

          }
    })
  }

  cancel(){
    this.frienddata = {}
    this.modalService.dismissAll()
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
  
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
 
      return "by clicking on a backdrop";
    } else {
 
      return `with: ${reason}`;
    }
  }
  
}
