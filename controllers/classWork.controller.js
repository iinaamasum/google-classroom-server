const ClassWorkModel = require('../models/classWork.model');

exports.postClassWork = async (req, res) => {
  const postData = new ClassWorkModel(req.body);
  const result = await postData.save();
  res.status(200).json({
    status: 'success',
    message: 'Posted the class work successfully.',
    result,
  });
};
