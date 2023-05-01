import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedRoutingModule } from './shared-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { MaterialModule } from 'app/material/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SwitchModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule, MultiSelectModule } from '@progress/kendo-angular-dropdowns';
//import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { DatePickerModule, DateInputsModule, DateRangeModule, TimePickerModule
 } from '@progress/kendo-angular-dateinputs';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';


//SOCKET SERVICE

import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { NotificationsComponent } from './notifications/notifications.component';

// const config: SocketIoConfig = {
//   url: environment.URL, options: {
//     query: { Authorization: localStorage.token }
//   }
// };

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    TranslateModule,
    GridModule,
    NgSelectModule,
    NgbModule,
    DialogModule,
    ToastrModule,
    MaterialModule,
    TooltipModule,
    NgxSpinnerModule,
    LayoutModule,
    SwitchModule,
    DropDownsModule,
    MultiSelectModule,
    SchedulerModule,
    DatePickerModule,
    ExcelExportModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    DateInputsModule,
    DateRangeModule,
    TimePickerModule,
    ExcelModule

  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    SharedRoutingModule,
    TranslateModule,
    PerfectScrollbarModule,
    GridModule,
    MaterialModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbDropdownModule,
    DialogModule,
    ToastrModule.forRoot({
      timeOut:20000,
      closeButton: true,
      maxOpened: 5,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    MaterialModule,
    TooltipModule,
    NgxSpinnerModule,
    LayoutModule,
    SwitchModule,
    DropDownsModule,
    MultiSelectModule,
    LayoutModule,
    SchedulerModule,
    DatePickerModule,
    DateRangeModule,
    ExcelExportModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    TimePickerModule,
    ExcelModule,
    //SocketIoModule.forRoot(config)
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    NotificationsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
