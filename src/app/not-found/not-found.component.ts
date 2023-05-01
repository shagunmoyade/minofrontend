import { Component, OnInit, ViewChild } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterEvent} from '@angular/router';
import { RoleService } from 'app/shared/services/role/role.service';
@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

    ViewCompaignboolean = false;
    AllCompaign = [];
    collapedSideBar: boolean;

    showLoadingindicator: Boolean;
    constructor(private _router: Router, private roleService: RoleService) {

        this.showLoadingindicator = true;
        this._router.events.subscribe((routerEvent: Event ) => {
            if (routerEvent instanceof NavigationStart) {
                this.showLoadingindicator = true;
            }
            if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
                this.showLoadingindicator = false;
            }
        });
    }

    ngOnInit() {}

    goToHomePage(){
    const route = this.roleService.checkRoutes();
    this._router.navigate([route]);
    }
}
