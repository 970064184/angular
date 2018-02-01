import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from "@angular/http";
import {Comment, Product} from "../../../../server/server/auction_server";
import 'rxjs/Rx';

@Injectable()
export class ProductService {

 /*   private  products:Product[]=[
    new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
    new Product(2,"第2个商品",2.99,1.5,"这是第2个商品，是我在学习angular时创建的",["图书"]),
    new Product(3,"第3个商品",3.99,2.5,"这是第3个商品，是我在学习angular时创建的",["数码产品"]),
    new Product(4,"第4个商品",4.99,3.5,"这是第4个商品，是我在学习angular时创建的",["食品"]),
    new Product(5,"第5个商品",5.99,4.5,"这是第5个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
    new Product(6,"第12个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]),
  ];*/
   /* private comments:Comment[]=[
      new Comment(1,1,"2017-10-22 17:56:20","张三",3,"东西不错"),
      new Comment(2,1,"2017-8-22 17:56:20","张五",4,"东西不错"),
      new Comment(3,1,"2017-9-22 17:56:20","张六",3,"东西不错"),
      new Comment(4,2,"2017-11-22 17:56:20","张三",5,"东西不错")
    ]*/
  constructor(private http:Http) {}

  getAllCategories():string[]{
      return ["电子产品","硬件设备","图书","数码产品","食品","衣服"];
  }

  getProducts():Observable<Product[]> {
      return this.http.get("/api/products").map(res=>res.json());
  }

  /*getProducts():Product[]{
    return this.products;
  }*/

/*
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }
*/
  getProduct(id:number):Observable<Product>{
    return this.http.get("/api/products/"+id).map(res=>res.json());
  }

 /* getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id);//filter过滤
  }*/
  getCommentsForProductId(id:number):Observable<Comment[]>{
    return this.http.get("/api/product/"+id+"/comments").map(res=>res.json());
  }

}
/*export class Product{
  constructor(
    public id:number,
    public  title:string,
    public  price:number,
    public rating:number,//评价
    public desc:string ,//简短描述
    categories:Array<string> //商品类别
  ){}
}*/
/*export class Comment{
  constructor(public id:number,
              public productId:number,
              public timestamp:string,
              public user:string,
              public rating:number,
              public content:string){ }
}*/
