const express = require('express');
const router = express.Router();

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

  var query = { $text: { $search: req.params.username } };
  console.log(query);
  UserSchema.findOne(query, (err, userData) => {
    if (err) {
      throw err;
    } else {
      console.log(userData);
      if (userData == null) {
        console.log('no such data');
        res.json(null);
      }
      else {
        console.log('found username');
        res.json(userData);
      }
    }
  });

});

router.post('/post', (req, res) => {
  console.log('Posting new user data');
  let newUserData = new UserSchema({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
  });

    newUserData.save((err, newUser) => {
      if (err) {
        throw err;
      } else {
        console.log(req.body);
        res.json(newUser);
      }
    })

});

module.exports = router;