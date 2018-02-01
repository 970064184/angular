import * as express from 'express';
import {Server} from "ws";
import {setInterval} from "timers";

const app=express();

export class Product{
    constructor(
        public id:number,
        public  title:string,
        public  price:number,
        public rating:number,//评价
        public desc:string ,//简短描述
        public categories:Array<string> //商品类别
    ){}
}

const  products:Product[]=[
    new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
    new Product(2,"第2个商品",2.99,1.5,"这是第2个商品，是我在学习angular时创建的",["图书"]),
    new Product(3,"第3个商品",3.99,2.5,"这是第3个商品，是我在学习angular时创建的",["数码产品"]),
    new Product(4,"第4个商品",4.99,3.5,"这是第4个商品，是我在学习angular时创建的",["食品"]),
    new Product(5,"第5个商品",5.99,4.5,"这是第5个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
    new Product(6,"第12个商品",6.99,2.5,"这是第6个商品，是我在学习angular时创建的",["衣服"]),
];

export class Comment{
    constructor(public id:number,
                public productId:number,
                public timestamp:string,
                public user:string,
                public rating:number,
                public content:string){ }
}

const comments:Comment[]=[
    new Comment(1,1,"2017-10-22 17:56:20","张三",3,"东西不错"),
    new Comment(2,1,"2017-8-22 17:56:20","张五",4,"东西不错"),
    new Comment(3,1,"2017-9-22 17:56:20","张六",3,"东西不错"),
    new Comment(4,2,"2017-11-22 17:56:20","张三",5,"东西不错")
]

app.get('/',(req,res)=>{
    res.send("hello express");
});
app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/products/:id',(req,res)=>{
    res.json(products.find((product)=>product.id==req.params.id));
});
app.get('/api/products/:id/comments',(req,res)=>{
    res.json(comments.filter((comment:Comment)=>comment.productId==req.params.id));
});
const server=app.listen(8000,"localhost",()=>{
    console.log("服务器已启动，地址是：http://localhost:8000");
});
const  wsServer=new Server({port:8085});
wsServer.on("connection",websocket=>{
    websocket.send("这个消息是服务器主动推送的！");
    websocket.on("message",message=>{
        console.log("接收到消息"+message);
    })
})
setInterval(()=>{
    if(wsServer.clients){
        wsServer.clients.forEach(client=>{
            client.send("这是定时推送的消息");
        })
    }
},2000);