'use strict';

const fs = require('fs');
const path = require('path');
const location = process.argv[2];
const extension = process.argv[3];


fs.readdir(location,(err, filelist)=>{
    if(err){
        return console.log(`Could not read dir. An error occured: ${err}`);
    }

    let filtered = filelist.filter(file =>{ return path.extname(file) === '.'+extension});
    filtered.forEach(file => {
        console.log(file);
    })

});
