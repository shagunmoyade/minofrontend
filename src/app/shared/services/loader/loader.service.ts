import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable()
export class LoaderService {
  constructor(
    private spinner: NgxSpinnerService
  ) {
  }
  isLoading = new Subject<boolean>();
  show() {
    this.spinner.show();
    this.isLoading.next(true);
  }

  hide() {
    this.spinner.hide();
    this.isLoading.next(false);
  }
}
