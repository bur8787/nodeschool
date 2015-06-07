var sum = 0;

var arg_number = process.argv.length

for(var i  = 2; i < arg_number; i++){
    sum += Number(process.argv[i])
    }

console.log(sum)