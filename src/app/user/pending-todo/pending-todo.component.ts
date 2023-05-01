import { Component, OnInit } from "@angular/core";
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "app/shared/services/MINO/user.service";

@Component({
  selector: "app-pending-todo",
  templateUrl: "./pending-todo.component.html",
  styleUrls: ["./pending-todo.component.scss"],
})
export class PendingTODOComponent implements OnInit {
  closeResult = "";
  showhide: any;
  todo: FormGroup;
  pendingTodo:any = []
  updatetodoId:any
  deltetodoId:any
  submitted = false;

  selected= "1"
  config: {
    itemsPerPage: number;
    currentPage: number;
    totalItems: any;
  };
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private UserService: UserService
  ) {}

  ngOnInit() {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: "",
    };
    this.getPendingTodo()
    this.todo = this.fb.group({
      title: ["", Validators.required],
      discription: ["", Validators.required],
    });
  }

  get f(){
    return this.todo.controls
  }

  addtodopopup(content, id:any, num) {
    this.showhide = num;
    if(id != 0){
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.showhide = 1;
      this.todo.reset()
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.showhide = 1;
      this.todo.reset()
      return "by clicking on a backdrop";
    } else {
      this.showhide = 1;
      this.todo.reset()
      return `with: ${reason}`;
    }
  }

  submitTodo(value) {
    if (this.todo.invalid) {
      return;
    }
    this.submitted = true

    this.UserService.addTodo(value).subscribe((res) => {
      // //console.log(res);
      if (res["status"] == true) {
        this.UserService.showToaster(res["message"]);
        this.ngOnInit();
        this.modalService.dismissAll();
      }
    });
  }
  updateTodo(value) {
    if (this.todo.invalid) {
      return;
    }
    this.submitted = true

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

  getPendingTodo() {
    this.UserService.getpendingTodo(this.config.itemsPerPage,this.config.currentPage).subscribe((res) => {
      // //console.log(res);
      if (res["status"] == true) {
      // //console.log(res);
      this.pendingTodo = res['data'];
      this.config.totalItems = res['totalcount']
      }else{
        this.pendingTodo = [];
        this.config.totalItems = ""
      }
    });
  }

  clear(){
    this.todo.reset()
  }

  cancel(){
    this.ngOnInit();
    this.modalService.dismissAll();
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

  pageChanged(page){
    this.config.currentPage = page
    this.getPendingTodo()
  }

}
