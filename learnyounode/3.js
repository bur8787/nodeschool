var file_path = process.argv[2]

var fs = require("fs");

var file = fs.readFileSync(file_path);
var file_string = file.toString();

var a = file_string.split("\n");

console.log(a.length - 1);