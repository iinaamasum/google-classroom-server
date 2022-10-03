const ClassWorkModel = require('../models/classWork.model');
const fs = require('fs');

exports.postClassWorkService = async (data) => {
  const postData = new ClassWorkModel(data);
  const result = await postData.save();
  return result;
};

exports.getAllClassWorkService = async (data) => {
  const result = await ClassWorkModel.find(data).sort({ createdAt: -1 });
  return result;
};

exports.getClassWorkByIdService = async (workId) => {
  const result = await ClassWorkModel.findById({ _id: workId });
  return result;
};
