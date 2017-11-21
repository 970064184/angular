import {Injectable} from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService{
  getProduct(): Product {
    return new Product(0,"sumsung8",8400,"最新款三星手机");
  }

  constructor(public logger:LoggerService) { }

}
