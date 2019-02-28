#! /usr/bin/env node
var fs = require("fs");
var knayi = require("knayi-myscript");

if (process.argv.length > 2) {
  var args = process.argv.slice(2);
  var srcText = args[0];
  try {
    var myFont = knayi.fontDetect(srcText);
    if (srcText) {
      process.argv.forEach(function(arg, i) {
        if (arg === '--detect') {
          console.log(myFont);
        }
      });
    }
  } catch (err) {
    return;
  }
} else {
  console.log("Please provide a file name.");
}
