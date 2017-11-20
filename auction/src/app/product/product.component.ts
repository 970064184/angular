import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>
  private imgUrl="http://placehold.it/320x150";
  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
      new Product(2,"第2个商品",2.99,1.5,"这是第2个商品，是我在学习angular时创建的",["图书"]),
      new Product(3,"第3个商品",3.99,2.5,"这是第3个商品，是我在学习angular时创建的",["数码产品"]),
      new Product(4,"第4个商品",4.99,3.5,"这是第4个商品，是我在学习angular时创建的",["食品"]),
      new Product(5,"第5个商品",5.99,4.5,"这是第5个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
      new Product(6,"第6个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]),
    ]
    this.products.push(new Product(1,"第7个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]))
  }

}
export class Product{
  constructor(
    public id:number,
    public  title:string,
    public  price:number,
    public rating:number,//评价
    public desc:string ,//简短描述
    categories:Array<string> //商品类别
  ){}
}
