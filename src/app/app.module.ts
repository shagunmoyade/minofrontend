
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { LoaderComponent } from './loader/loader.component';
import { MatStepperModule } from '@angular/material/stepper';
// import { MaterialModule } from './material/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LoaderInterceptor } from './shared/services/loader/loader.interceptor';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { LoaderService } from './shared/services/loader/loader.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// socket 
// import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { DialogModule } from "@progress/kendo-angular-dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// const config: SocketIoConfig = {
//   url: environment.URL, options: {
//     query: { Authorization: localStorage.token }
//   }
// };
import {NgxPaginationModule} from 'ngx-pagination'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [AppComponent, 
    FullLayoutComponent, ContentLayoutComponent,
    SignupComponent,
    LoaderComponent,],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    DialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      timeOut:10000,
      closeButton: true,
      maxOpened: 5,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    PerfectScrollbarModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
    // MaterialModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    GridModule,
    ButtonsModule,
    SchedulerModule,
    DateInputsModule,
    MatButtonModule,
    MatAutocompleteModule,
    NgxPaginationModule
    // SocketIoModule.forRoot(config)

  ],
  providers: [
    AuthService,
    AuthGuard,
    LoaderService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
   // {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
