const { ObjectId } = require('mongodb');
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
  workFileName: String,
  classId: {
    type: ObjectId,
    ref: 'NewClassModel',
  },
  path: {
    type: String,
    required: [true, 'File path is required'],
  },
});

const ClassWorkModel = mongoose.model('Class-Work', classWorkSchema);
module.exports = ClassWorkModel;
