import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/MINO/user.service";
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.scss']
})
export class CompletedTODOComponent implements OnInit {
completeTodo:any = []
deltetodoId:any
closeResult = ''
todo:FormGroup
config: {
  itemsPerPage: number;
  currentPage: number;
  totalItems: any;
};
  constructor(private UserService: UserService,private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.todo = this.fb.group({
      title: [""],
      discription: [""],
    });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: "",
    };
    this.getCompleteTodo()
  }

 getCompleteTodo() {
    this.UserService.getCompleteTodo(this.config.itemsPerPage,this.config.currentPage).subscribe((res) => {
      // //console.log(res);
      if (res["status"] == true) {
      // //console.log(res);
      this.completeTodo = res['data']
      this.config.totalItems = res['totalcount']
      }else{
        this.completeTodo = []
      this.config.totalItems =""
      }
    });
  }


  changeStatus(value,id){
    // //console.log(value,id);
    let post={
      "id":id,
        "status":value
    }
    this.UserService.changeStatus(post).subscribe((res) => {
      if (res["status"] == true) {
        this.UserService.showToaster(res["message"]);
        this.ngOnInit();
        this.modalService.dismissAll();
      }
    });
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

      deletetodo(id,content){
        this.deltetodoId = id
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
    
      suredelete(){
        this.UserService.deleteTodo(this.deltetodoId).subscribe((res) => {
          if (res["status"] == true) {
            this.UserService.showToaster(res["message"]);
            this.ngOnInit();
            this.modalService.dismissAll();
          }
        });
      }


      async viewtodo(content,id){
        await this.UserService.getTodobyid(id).subscribe((res) => {
           // //console.log(res);
           if (res["status"] == true) {
       this.todo.patchValue({
         title: res['data']['title'],
         discription: res['data']['discription']
       })
           }
         });
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
       
      pageChanged(page){
        this.config.currentPage = page
        this.getCompleteTodo()
      }
}
