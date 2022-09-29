const NewClassModel = require('../models/newClass.model');

exports.postNewClassService = async (data) => {
  const postDoc = new NewClassModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllClassService = async (query) => {
  const result = await NewClassModel.find(query);
  return result;
};
