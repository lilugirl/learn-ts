"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
app.use(function (ctx) {
    ctx.body = 'xiadd';
});
app.listen(8002, function () {
    console.log('server is running');
});
//# sourceMappingURL=app.js.map