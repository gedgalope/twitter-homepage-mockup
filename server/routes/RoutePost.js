const express = require('express');
const router = express.Router();
// const util = require('util');

const PostSchema = require('../models/PostSchema');

router.get('/home/all', (req, res, next) => { //get all data from api
  console.log('all post');
  PostSchema.find((err, postText) => {
    if (err) {
      console.error(err);
    } else {
      res.json(postText);
    }
  })
});

router.get('/home/:data', (req, res) => {

  var query = { $text: { $search: "\"" + req.params.data + "\"" } };
  PostSchema.findOne(query, (err, postText) => {
    console.log('getting a specific post');
    if (err) {
      throw err;
    } else {
      res.json(postText);
    }
  });

});

router.post('/home/post', (req, res) => {
  console.log('Posting new user post');
  let newUserData = new PostSchema({
    text: req.body.text,
    userId: req.body.userId
  });
  newUserData.save((err, newUser) => {
    if (err) {
      throw err;
    } else {
      console.log(req.body);
      res.json(newUser);
    }
  });
});

router.delete('/home/:id', (req, res) => {
  // console.log('deleting ID: ' + _id);

  PostSchema.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      throw (err);
    } else {
      res.json(result)
    }
  });
});

router.put('/home/update/:id', (req, res) => {
  let newUserData ={text: req.body.text};
  PostSchema.findOneAndUpdate({ _id: req.params.id }, newUserData, (err, result) => {
    if (err) {
      throw (err);
    } else {
      res.json(result);
    }
  })
});

// router.delete('/:id',async(req, res)=>{
//   const posts = await loadPostsCollection();
//   await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
//   res.status(200).send();
// });

module.exports = router;