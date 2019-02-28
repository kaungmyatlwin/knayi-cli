#! /usr/bin/env node
var fs = require("fs");
var knayi = require("knayi-myscript");

if (process.argv.length > 2) {
  var srcFile = process.argv[2];
  fs.readFile(srcFile, "utf-8", function(err, srcText) {
    try {
      var myFont = knayi.fontDetect(srcText);
      process.argv.forEach(function(arg) {
        if (arg === '--detect') {
          console.log(myFont);
        }
      });
    } catch (err) {
      return;
    }
  });
} else {
  console.log("Please provide a file name.");
}
