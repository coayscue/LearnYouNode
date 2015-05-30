var fs = require("fs");

var buff = fs.readFileSync(process.argv[2]);

var stringarray = buff.toString().split("\n");

var numNewLines = stringarray.length - 1;

console.log(numNewLines);