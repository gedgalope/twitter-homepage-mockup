const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const UserCredentials = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});
UserCredentials.index({name:'text',lastname:'text',username:'text'});

const UserSchema = module.exports = mongoose.model('UserSchema',UserCredentials);

//M stands for models, this will include all the code for our database models
//V which stands for the views or the layout
//C, which stands for controllers which is the logic of how the app handles the incoming requests and outgoing responses.