"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server is running now');
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
// To compile the code, you need to run the command----  npm run build
//npm run dev ---------to trigger the development server
