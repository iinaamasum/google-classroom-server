const fs = require('fs');
const ClassWorkModel = require('../models/classWork.model');
const {
  postClassWorkService,
  getAllClassWorkService,
  getClassWorkByIdService,
} = require('../services/classWork.service');

exports.postWorkFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(200).json({
        status: 'failed',
        message: "Can't post file. Server posting file error.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Posted the file.',
      file,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post file. Please check your internet.",
      error,
    });
  }
};

exports.postClassWork = async (req, res) => {
  try {
    const result = await postClassWorkService(req.body);
    if (!result?._id) {
      return res.status(200).json({
        status: 'failed',
        message:
          "Can't post class work successfully. Server posting file error.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Posted the class work successfully.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post the class work.",
      error,
    });
  }
};

exports.getAllClassWork = async (req, res) => {
  try {
    const result = await getAllClassWorkService(req.query);
    if (!result.length) {
      return res.status(200).json({
        status: 'failed',
        message: 'No class found.',
        result,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'got all of the class work successfully.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get all class work. Internal error.",
      error,
    });
  }
};

exports.getClassWorkById = async (req, res) => {
  try {
    const result = await getClassWorkByIdService(req.params.id);
    if (!result?._id) {
      return res.status(200).json({
        status: 'failed',
        message: 'No class work found. result is empty',
        result,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'got the class work the given Id.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get class work by id. Internal error.",
      error,
    });
  }
};

exports.getRequestedFile = async (req, res) => {
  const { fileName } = req.params;
  const path = 'files/' + fileName;
  console.log(path);

  res.download(path, (error) => {
    console.log(error);
  });
};

exports.deleteClassWorkByIdWithFile = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ClassWorkModel.findById(id);
    console.log('result', result);
    if (!!result.path) {
      const deletedClassWork = await ClassWorkModel.deleteOne({ _id: id });
      console.log('deletedwork', deletedClassWork);
      const deletedFile = fs.unlinkSync(result.path);
      if (!deletedClassWork.deletedCount) {
        return res.status(200).json({
          status: 'failed',
          message: "Can't delete the work.",
          result: deletedClassWork,
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'delete the work. @param object.',
        result: deletedClassWork,
      });
    }
    const deletedClassWork = await ClassWorkModel.deleteOne({ _id: id });
    console.log('deletedwork without file', deletedClassWork);
    if (!deletedClassWork.deletedCount) {
      return res.status(200).json({
        status: 'failed',
        message: "Can't delete the work.",
        result: deletedClassWork,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'delete the work. @param object.',
      result: deletedClassWork,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'failed',
      message: "Can't delete the work.",
      error,
    });
  }
};
