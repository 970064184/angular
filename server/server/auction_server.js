"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
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
app.get('/', function (req, res) {
    res.send("hello express");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动，地址是：http://localhost:8000");
});
//# sourceMappingURL=auction_server.js.map