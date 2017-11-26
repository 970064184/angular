import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {AnotherProductService} from "../shared/another-product.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
  /*providers:[{
    provide:ProductService,useClass:AnotherProductService
  }]*/
})
export class Product2Component implements OnInit {

  product:Product;
  birthday:Date=new Date();
  pi:number=3.1415926;
  size:number=7;

  private productService:ProductService;
  constructor(private injector:Injector){
    this.productService=injector.get(ProductService);
  }

 /* constructor(private productService:ProductService) { }*/

  ngOnInit() {
    this.product=this.productService.getProduct();
  }

}
