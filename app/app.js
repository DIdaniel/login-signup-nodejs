"use strict";

// module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// routing
const home = require("./src/routes/home");

// App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함되는 경우 제대로 인식하지 못하는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use => middleware를 연결(등록)해주는 메서드

module.exports = app;
