import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(private logger:LoggerService) { }

  getProduct():Product{
    this.logger.log("getProduct方法被调用");
    return new Product(0,"iphoneX",8400,"最新款苹果手机");
  }


}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){}
}
