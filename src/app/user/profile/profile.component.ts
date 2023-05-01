import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/MINO/user.service";
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { environment } from 'environments/environment';
import { AuthService } from 'app/shared/services/MINO/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
pofile: FormGroup
baseURL = environment.URL
imagURL:any
userid:any
fileToUpload: any;
submitted = false
  constructor(private UserService: UserService, private fb : FormBuilder, private authservice: AuthService) { }

  ngOnInit(){
    this.pofile = this.fb.group({
      email: [""],
      password: ["",Validators.compose([Validators.required, Validators.minLength(6)]),],
      fullname: ["",Validators.compose([Validators.required, Validators.minLength(8)]),],
      confirmpassword: ["",Validators.compose([Validators.required, Validators.minLength(6)]),],
      image_url: [""],
    })
    this.getprofileData()
  }
  get f(){
    return this.pofile.controls
  }

  getprofileData(){
    this.UserService.getprofiledata().subscribe(res => {
      //console.log(res);
      this.userid =  res['data']['_id']
      this.imagURL = res['data']['image_url']
      if(res['status'] == true){
        this.pofile.patchValue({
          email:res['data']['email'],
          password:res['data']['password'], 
          fullname:res['data']['fullname'], 
          confirmpassword:res['data']['confirmpassword']
        })
      }
    })
  }
  update(value){
    if(this.pofile.invalid){
return
    }
    this.submitted = true
value['id'] = this.userid
value['image_url'] =  this.imagURL
this.UserService.updateprofiledata(value).subscribe(res => {
  if(res['status'] == true){
    localStorage.setItem('userName',value.fullname)
    localStorage.setItem('imageurl', this.imagURL)
this.UserService.showToaster(res['message'])
this.ngOnInit()
location.reload()
  }else{
    this.UserService.ErrorSuccess(res['message'])
  }
})
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (
      this.fileToUpload.type != "image/jpeg" &&
      this.fileToUpload.type != "image/png" && this.fileToUpload.type != 'image/gif'
    ) {
      return this.UserService.ErrorSuccess("File type should be png or jpeg");
    }
    if (this.fileToUpload.size > 5000000) {
      return this.UserService.ErrorSuccess("File Should be less then 5mb");
    }
    this.postFile(files);
  }

  postFile(fileToUpload) {
    var file = new FormData();
    file.append("file", fileToUpload[0]);
    this.authservice.uploadAvtar(file).subscribe((res) => {
      if (res["status"] == true) {
        this.imagURL = res['file']['path']
        this.UserService.showToaster(res["message"]);
      }
    });
  }

}
