import {Directive} from '@angular/core';
import {equalValidator} from "../validator/validator";
import {NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[equal]',
  providers:[{provide:NG_VALIDATORS,useValue:equalValidator,multi:true}]
})
export class EqualValidatorDirective {

  constructor() { }

}
