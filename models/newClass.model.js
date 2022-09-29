const mongoose = require('mongoose');

const newClassSchema = new mongoose.Schema(
  {
    classTitle: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Class title is required.'],
      minLength: [2, 'Class title should be more than 1 chars.'],
      maxLength: [100, 'Class title can be max of 100 chars.'],
      unique: [true, 'class title should be unique.'],
    },
    section: {
      type: String,
      required: [true, 'section is required.'],
      trim: true,
    },
    subject: {
      type: String,
      required: [true, 'subject is required.'],
      trim: true,
    },
    roomNumber: {
      type: String,
      required: [true, 'Room number is required.'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewClassModel = mongoose.model('NewClassModel', newClassSchema);
module.exports = NewClassModel;
