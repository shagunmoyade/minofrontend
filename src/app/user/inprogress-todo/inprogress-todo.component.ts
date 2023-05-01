import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/MINO/user.service";
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-inprogress-todo',
  templateUrl: './inprogress-todo.component.html',
  styleUrls: ['./inprogress-todo.component.scss']
})
export class InprogressTODOComponent implements OnInit {
  inprogressTodo:any=[]
  todo: FormGroup;
  closeResult='';
  updatetodoId:any
  config: {
    itemsPerPage: number;
    currentPage: number;
    totalItems: any;
  };
  constructor(private UserService: UserService,private modalService: NgbModal,  private fb: FormBuilder,) { }

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
this.getInpreogressTodo()
  }

  getInpreogressTodo() {
    this.UserService.getInrogressTodo(this.config.itemsPerPage,this.config.currentPage).subscribe((res) => {
      // //console.log(res);
      if (res["status"] == true) {
      // //console.log(res);
      this.inprogressTodo = res['data']
      this.config.totalItems = res['totalcount']
      }else{
        this.inprogressTodo = []
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

       clear(){
        this.todo.reset()
      }
    
      cancel(){
        this.ngOnInit();
        this.modalService.dismissAll();
      }

      todopopup(content,id){
        this.updatetodoId= id
        this.UserService.getTodobyid(id).subscribe((res) => {
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

      updateTodo(value) {
        if (this.todo.invalid) {
          return;
        }
        value['id'] =  this.updatetodoId
        this.UserService.UpdateTodo(value).subscribe((res) => {
          // //console.log(res);
          if (res["status"] == true) {
            this.UserService.showToaster(res["message"]);
            this.ngOnInit();
            this.modalService.dismissAll();
          }
        });
      }

      pageChanged(page){
        this.config.currentPage = page
        this.getInpreogressTodo()
      }
}
