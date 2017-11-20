import {Component, Input, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private  rating:number=0;

  private stars:boolean[];

  constructor() { }

  ngOnInit() {
    this.stars=[];
    for(var i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
