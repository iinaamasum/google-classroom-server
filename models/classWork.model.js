const mongoose = require('mongoose');

const classWorkSchema = new mongoose.Schema({
  workTitle: {
    type: String,
    required: [true, 'Work title is required.'],
  },
  workDetails: {
    type: String,
    required: [true, 'Work details is required.'],
  },
  userEmail: {
    type: String,
    required: [true, 'User email not provided.'],
  },
  workMessage: [
    {
      messageFrom: String,
      message: String,
    },
  ],
});

const ClassWorkModel = mongoose.model('Class-Work', classWorkSchema);
module.exports = ClassWorkModel;
