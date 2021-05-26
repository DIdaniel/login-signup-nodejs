"use strict";

// module
const express = require("express");
const app = express();

// routing
const home = require("./routes/home/index");

// App setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use => middleware를 연결(등록)해주는 메서드

module.exports = app;
