import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

/*  private products:Array<Product>*/
  private products:Product[];
  private imgUrl="http://placehold.it/320x150";
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
    /*this.products.push(new Product(1,"第7个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]))*/
  }

}

