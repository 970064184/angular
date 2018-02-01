import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/product.service";
import {Comment, Product} from "../../../../server/server/auction_server";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  /*private productTitle:string;*/

  product:Product;

  comments:Comment[];

  newRating:number=5;
  newComment:string="";

  isCommentHidden="true";

  constructor(private routInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    let  productId:number=this.routInfo.snapshot.params["productId"];
   this.productService.getProduct(productId).subscribe(
      product=>this.product=product
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      comments=>this.comments=comments
    );
/*
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getCommentsForProductId(productId);
*/
   /* this.productTitle=this.routInfo.snapshot.params["productTitle"];*/
  }
  addComment(){
    let comment=new Comment(0,this.product.id,new Date().toString(),"someone",this.newRating,this.newComment);
   /* this.comments.push(comment);*/
    this.comments.unshift(comment);

    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0)
    this.product.rating=sum/this.comments.length;

    //重置表单
    this.newRating=5;
    this.newComment=null;
    this.isCommentHidden="true";
  }

}
