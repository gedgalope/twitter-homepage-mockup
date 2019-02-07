const express = require('express');
const bodyParser = require('body-parser'); 
//body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request
const cors = require('cors');
const mongoose = require('mongoose');
// const path = require('path');


const app = express();
const port = 3000;


// app.use(mongoose());

mongoose.connect('mongodb://mockup:mockup123@ds131583.mlab.com:31583/twitter-mockup',{useNewUrlParser:true});
mongoose.connection.on('connected', function(){
    console.log('connected to mlab db');
});

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname,'public')));

app.get('/' , (req,res)=> res.send('Hello World'));
app.listen(port, ()=>console.log('listening to port 3000'));

module.exports =app;