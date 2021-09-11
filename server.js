"use strict";
var path = require("path");
var express = require("express");

var app = express();

app.use("/", express.static(path.resolve(__dirname, "./build")));

// Allows you to set port in the project properties.
app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get("port"), function () {
  console.log("Server listening on port " + process.env.PORT || 3000);
});
