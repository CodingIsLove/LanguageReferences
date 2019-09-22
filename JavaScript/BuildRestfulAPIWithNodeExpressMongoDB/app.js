const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json())



//Import Routes
const postRoute = require('./routes/posts');

// This is how to use middleware, is super easy, you have to keep it in directly this structure. Super sweet!
app.use('/posts',postRoute);



// Route possiblity is to GET, DELETE, PATCH,...
// ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home");
});



// Connect to Mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology:true}, ()=>{
    console.log("Connected to DB");
});




// How to start listen to server
app.listen(3000);
