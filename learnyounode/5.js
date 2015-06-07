var dir_path = process.argv[2]
var filename_extension = process.argv[3]
var fs = require("fs");

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

fs.readdir(dir_path,function callback(err,list){ 
    var filtered_list = []

    for(var i = 0; i < list.length; i++){
        if(list[i].endsWith("." + filename_extension)){
            filtered_list.push(list[i]);
        }
    }
    for(var i = 0; i < filtered_list.length;i++){
        console.log(filtered_list[i])
    }
});