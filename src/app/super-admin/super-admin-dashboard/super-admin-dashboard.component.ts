import { Component, OnInit } from "@angular/core";
import { SuperAdminService } from "app/shared/services/MINO/super-admin.service";

@Component({
  selector: "app-super-admin-dashboard",
  templateUrl: "./super-admin-dashboard.component.html",
  styleUrls: ["./super-admin-dashboard.component.scss"],
})
export class SuperAdminDashboardComponent implements OnInit {
  userData: any = [];
  Counts: any = {};
  constructor(private service: SuperAdminService) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.service.getAllUser().subscribe((res) => {
      if (res["status"] == true) {
        this.userData = res["data"];
        this.Counts = res["dashboard"];
      } else {
        this.userData = [];
        this.Counts = {};
      }
    });
  }

  oncheck(value, id, num) {
    // //console.log(value.target.checked);
    if (num == 1) {
      let post = {
        status: value.target.checked,
        id: id,
      };
      this.service.activeDeactiveUser(post).subscribe((res) => {
        if (res["status"] == true) {
          this.service.showToaster(res["message"]);
          this.ngOnInit()
        }
      });
    }else if (num == 2){
      let post = {
        status: value.target.checked,
        id: id,
      };
      this.service.userAdminUpdate(post).subscribe((res) => {
        if (res["status"] == true) {
          this.service.showToaster(res["message"]);
          this.ngOnInit()
        }
      });
    }else{
      let post = {
        status: value.target.checked,
        id: id,
      };
      this.service.userSuperAdminUpdate(post).subscribe((res) => {
        if (res["status"] == true) {
          this.service.showToaster(res["message"]);
          this.ngOnInit()
        }
      });
    }
  }
}
