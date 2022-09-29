const NewClassModel = require('../models/newClass.model');
const {
  postNewClassService,
  getAllClassService,
} = require('../services/newClass.service');

exports.postNewClass = async (req, res, next) => {
  try {
    const result = await postNewClassService(req.body);
    console.log(result);
    if (!result) {
      res.status(400).json({
        status: 'failed',
        message: "Can't Post the given class.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Posted the given new class.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post the data. Something went wrong",
      error,
    });
  }
};

exports.getAllClass = async (req, res, next) => {
  try {
    const result = await getAllClassService(req.body);
    if (result.length === 0) {
      res.status(400).json({
        status: 'failed',
        message: "Can't get all class.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got all class. @param Array of objects.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get all class. Something went wrong.",
      result,
    });
  }
};
