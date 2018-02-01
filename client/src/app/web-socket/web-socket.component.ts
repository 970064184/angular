import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../shared/websocket.service";

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(private wsService:WebsocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data=>console.log(data),
        err=>console.log(err),
        ()=>console.log("流已经结束")
      )
  }

  sendMessageToService(){
    this.wsService.sendMessage("hello from client");
  }
}
