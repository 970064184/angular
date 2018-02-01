import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Product} from "../../../../server/server/auction_server";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

/*  private products:Array<Product>*/

  private products:Observable<Product[]>;

/*
  private keyword:string;

  private titleFilter:FormControl=new FormControl();
*/

  private imgUrl="http://placehold.it/320x150";

  constructor(private productService:ProductService) {
  /*  this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      value=>this.keyword=value
    );*/
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
    /*this.products.push(new Product(1,"第7个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]))*/
  }

}

