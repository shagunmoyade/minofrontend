import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/shared/services/MINO/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  signupform: FormGroup;
  fileToUpload: any;
  submitted = false;
  filepath:any
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}

  ngOnInit() {
    this.signupform = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-z]{2,4}$"),
        ]),
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      fullname: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      confirmpassword: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      image_url: ["", Validators.required],
    });
  }
  get f() {
    return this.signupform.controls;
  }

  signup(value) {
    this.submitted = true;
    if (this.signupform.invalid) {
      return;
    }
    if (value.password != value.confirmpassword) {
      return this.service.ErrorSuccess("Password and Confirmation Password do not match");
    }
    value.image_url = this.filepath
    //console.log(value)
    this.service.signup(value).subscribe(res =>{
      // //console.log(res);
      if(res['status'] == true){
        this.service.showToaster('User Created')
        this.router.navigate(["./login"]);
      }
    })
  }

  gotologin() {
    this.router.navigate(["./login"]);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (
      this.fileToUpload.type != "image/jpeg" &&
      this.fileToUpload.type != "image/png" && this.fileToUpload.type != 'image/gif'
    ) {
      return this.service.ErrorSuccess("File type should be png or jpeg");
    }
    if (this.fileToUpload.size > 5000000) {
      return this.service.ErrorSuccess("File Should be less then 5mb");
    }
    this.postFile(files);
  }

  postFile(fileToUpload) {
    var file = new FormData();
    file.append("file", fileToUpload[0]);
    this.service.uploadAvtar(file).subscribe((res) => {
      //console.log(res);
      
      if (res["status"] == true) {
        this.filepath = res['file']['path']
        this.service.showToaster(res["message"]);
      }
    });
  }
}
