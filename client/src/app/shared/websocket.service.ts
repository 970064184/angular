import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class WebsocketService {

  ws:WebSocket;
  constructor() { }

  createObservableSocket(url:string):Observable<any>{
    this.ws=new WebSocket(url);
    return new Observable(
      observable=>{
        this.ws.onmessage=(event)=>observable.next(event.data);
        this.ws.onerror=(event)=>observable.error(event);
        this.ws.onclose=(event)=>observable.complete();
      }
    );
  }

  sendMessage(message:string){
    this.ws.send(message);
  }

}
