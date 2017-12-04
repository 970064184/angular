import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel:FormGroup=new FormGroup({
    username:new FormControl("aaa"),
      dateRange:new FormGroup({
        from:new FormControl(),
        to:new FormControl()
      }),
    emails:new FormArray([
      new FormControl("a@a.com"),
      new FormControl("b@b.com")
    ])
  });

  // username:FormControl=new FormControl("aaa");//formControl的初始值

  // form:new FormControl(),
  // to:new FormControl()

 /* emails:FormArray=new FormArray([
    new FormControl("a@a.com"),
    new FormControl("b@b.com")
  ])*/
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formModel.value);
  }

  addEmail(){
    let eamils=this.formModel.get("emails") as FormArray;
    eamils.push(new FormControl());
  }
}
