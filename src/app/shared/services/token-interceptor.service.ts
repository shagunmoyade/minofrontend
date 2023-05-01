import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { DialerService } from './dialer.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { tap, mapTo, map } from 'rxjs/operators';
import { AuthService } from './MINO/auth.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private dialerService: DialerService,private router: Router) { }
  intercept(req, next) {

    const Service = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${Service.getToken()}`,// Read token
      }
    });

    //return next.handle(tokenizedReq)
    return next.handle(tokenizedReq).pipe(
      tap(event => {
        if(event['status'] == 401){
          localStorage.removeItem('token')
          this.router.navigateByUrl('/login')
        }
      },
          err => {
              if (err.status === 401) {
                 localStorage.removeItem('token');
                 this.router.navigateByUrl('/login')
            }
          }
        ),
      map(event => {return event;},
          error => {}
        )
      )
    /*.map(event => {
        if (event) {
          //console.log(event.status);
          //console.log(event.statusText);
          alert(event.status + ' ' + event.statusText);

        }         
        return event;
    });*/
  }
}

// complete

