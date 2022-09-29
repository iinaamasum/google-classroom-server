const NewClassModel = require('../models/newClass.model');

exports.postNewClassService = async (data) => {
  const postDoc = new NewClassModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllClassService = async (query) => {
  const result = await NewClassModel.find(query).sort({
    createdAt: -1,
    roomNumber: 1,
    classTitle: 1,
  });
  return result;
};

exports.deleteClassByIdService = async (classId) => {
  const result = await NewClassModel.deleteOne({ _id: classId });
  return result;
};
