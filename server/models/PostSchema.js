const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const PostContent = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: String,
    required: false
  }
}, { versionKey: false }
);
PostContent.index({ text: 'text', date: 'text', userId: 'text'});

const PostSchema = module.exports = mongoose.model('PostSchema', PostContent);

//M stands for models, this will include all the code for our database models
//V which stands for the views or the layout
//C, which stands for controllers which is the logic of how the app handles the incoming requests and outgoing responses.