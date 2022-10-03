const {
  postClassWork,
  postWorkFile,
  getAllClassWork,
  getClassWorkById,
} = require('../controllers/classWork.controller');
const { getClassById } = require('../controllers/newClass.controller');
const fileUploader = require('../middlewares/fileUploader');
const router = require('express').Router();

router.post('/file-upload', fileUploader.single('workFile'), postWorkFile);
router.route('/').post(postClassWork).get(getAllClassWork);
router.route('/:id').get(getClassWorkById);

module.exports = router;
