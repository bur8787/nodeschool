var file_path = process.argv[2]
var fs = require("fs");

fs.readFile(file_path,function(err,data){
    console.log(data.toString().split("\n").length - 1);
});