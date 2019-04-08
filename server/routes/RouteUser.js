const express = require('express');
const router = express.Router();
// const util = require('util');

const UserSchema = require('../models/UserSchema');

router.get('/all', (req, res, next) => { //get all data from api
  console.log('getting all stored values');
  UserSchema.find((err, userData) => {
    if (err) {
      console.error(err);
    } else {
      res.json(userData);
    }
  })
});

router.get('/:username', (req, res) => {

  var query = { $text: { $search: "\"" + req.params.username + "\"" } };
  UserSchema.findOne(query, (err, userData) => {
    if (err) {
      throw err;
    } else {
      res.json(userData);
    }
  });

});

router.post('/post', (req, res) => {
  console.log('Posting new user data');
  let newUserData = new UserSchema({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    userId: req.body.userId
  });

  console.log('checking for duplicate userID')
  var query = { $text: { $search: "\"" + newUserData.userId + "\"" } };
  var duplicateUser = UserSchema.aggregate([{$match:{userId:newUserData.userId}}], (err,result)=>{
    if(err){
      throw err;
    }else{
      console.log('result' + result);
      return result;
    }
  });
  console.log(duplicateUser)
  if (duplicateUser) {
    console.log('duplicate user')
  } else {
    newUserData.save((err, newUser) => {
      if (err) {
        throw err;
      } else {
        console.log(req.body);
        res.json(newUser);
      }
    })
  }

});

router.delete('/:id', (req, res) => {
  // console.log('deleting ID: ' + _id);

  UserSchema.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      throw (err);
    } else {
      res.json(result)
    }
  });


})

// router.delete('/:id',async(req, res)=>{
//   const posts = await loadPostsCollection();
//   await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
//   res.status(200).send();
// });

module.exports = router;