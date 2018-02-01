"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var timers_1 = require("timers");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, //评价
        desc, //简短描述
        categories //商品类别
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories; //商品类别
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习angular时创建的", ["电子产品", "硬件设备"]),
    new Product(2, "第2个商品", 2.99, 1.5, "这是第2个商品，是我在学习angular时创建的", ["图书"]),
    new Product(3, "第3个商品", 3.99, 2.5, "这是第3个商品，是我在学习angular时创建的", ["数码产品"]),
    new Product(4, "第4个商品", 4.99, 3.5, "这是第4个商品，是我在学习angular时创建的", ["食品"]),
    new Product(5, "第5个商品", 5.99, 4.5, "这是第5个商品，是我在学习angular时创建的", ["电子产品", "硬件设备"]),
    new Product(6, "第12个商品", 6.99, 2.5, "这是第6个商品，是我在学习angular时创建的", ["衣服"]),
];
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var comments = [
    new Comment(1, 1, "2017-10-22 17:56:20", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-8-22 17:56:20", "张五", 4, "东西不错"),
    new Comment(3, 1, "2017-9-22 17:56:20", "张六", 3, "东西不错"),
    new Comment(4, 2, "2017-11-22 17:56:20", "张三", 5, "东西不错")
];
app.get('/', function (req, res) {
    res.send("hello express");
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/products/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动，地址是：http://localhost:8000");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send("这个消息是服务器主动推送的！");
    websocket.on("message", function (message) {
        console.log("接收到消息" + message);
    });
});
timers_1.setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("这是定时推送的消息");
        });
    }
}, 2000);
//# sourceMappingURL=auction_server.js.map