const fs = require('fs');


if(process.argv.length < 3){
    console.log('Pleas specify a file to read');
    return;
}


let buf = fs.readFileSync(process.argv[2]).toString();

console.log(buf.split('\n').length-1);
