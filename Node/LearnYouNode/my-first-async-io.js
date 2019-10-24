'use strict';

const fs = require('fs');

if(process.argv.length <3){
    return console.log('Please give a valid argument');
}

fs.readFile(process.argv[2].toString(),(err,data)=>{
   if(err){
       return console.log('Oh noo.... an error occured: ' + err);
   }
   console.log(data.toString().split('\n').length-1);
});
