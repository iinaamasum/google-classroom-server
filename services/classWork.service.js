const ClassWorkModel = require('../models/classWork.model');

exports.postClassWorkService = async (data) => {
  const postData = new ClassWorkModel(data);
  const result = await postData.save();
  return result;
};

exports.getAllClassWorkService = async (data) => {
  const result = await ClassWorkModel.find(data);
  return result;
};
