import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import  {io} from 'socket.io-client';
import * as ios from 'socket.io-client';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private url = environment.URL
  private socket;
  constructor() {
    this.socket = io(this.url);
   }
   private messageSource = new BehaviorSubject('default message');
   currentMessage = this.messageSource.asObservable();

   changeMessage(message: string) {
    this.messageSource.next(message)
  }

   connecttoSocketio(id,eventName){
    // let status = value == true ?'true': 'false' 
this.socket = ios.connect(`${this.url}?empoyeeId=${id}`);
// return this.socket.on('connection', () => {
  return Observable.create((observer) => {
    this.socket.once(eventName, (message:any) => {
        observer.next(message);
    });
});
//  })
   }

   public sendMessage(message) {
    return  this.socket.emit('newMessage', message,(res)=>{
      //console.log(res);
      
    //    Observable.create((observer) => {
    //     this.socket.on("newMessage1", (message:any) => {
    //       // debugger
    //         observer.next(message);
    //     });
    // });
    });
    
}

public sendchatmessage(message) {
  return  this.socket.emit('sendchat', message,(res)=>{
    //console.log(res);
    
  //    Observable.create((observer) => {
  //     this.socket.on("newMessage1", (message:any) => {
  //       // debugger
  //         observer.next(message);
  //     });
  // });
  });
  
}
public sendseenchatmessage(message) {
  return  this.socket.emit('seenchat', message,(res)=>{
    //console.log(res);
    
  //    Observable.create((observer) => {
  //     this.socket.on("newMessage1", (message:any) => {
  //       // debugger
  //         observer.next(message);
  //     });
  // });
  });
  
}


public getMessages = (eventName) => {
  return Observable.create((observer) => {
      this.socket.on(eventName, (message) => {
        // debugger
          observer.next(message);
      });
  });
}


public onAny(){
  return Observable.create((observer) => {
    this.socket.onAny((eventName, ...args) => {
      observer.next(...args);
      // ...
    });
    // this.socket.on(eventName, (message) => {
    //   // debugger
    //     observer.next(message);
    // });
});
 
}
public message$: BehaviorSubject<string> = new BehaviorSubject('');
public getNewMessage = () => {
  this.socket.on('newMessage1', (message) =>{
    this.message$.next(message);
  });

  return this.message$.asObservable();
};

public chatmessage$: BehaviorSubject<string> = new BehaviorSubject('');
public getNewChatMessage = () => {
  this.socket.on('newchat', (message) =>{
    this.chatmessage$.next(message);
  });

  return this.chatmessage$.asObservable();
};

public seenchatmessage$: BehaviorSubject<string> = new BehaviorSubject('');
public getNewseenChatMessage = () => {
  this.socket.on('seennewchat', (message) =>{
    this.seenchatmessage$.next(message);
  });

  return this.seenchatmessage$.asObservable();
};


}
