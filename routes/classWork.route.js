const {
  postClassWork,
  postWorkFile,
  getAllClassWork,
} = require('../controllers/classWork.controller');
const fileUploader = require('../middlewares/fileUploader');
const router = require('express').Router();

router.post('/file-upload', fileUploader.single('workFile'), postWorkFile);
router.route('/').post(postClassWork).get(getAllClassWork);
// router.route('/').post(postClassWork);

module.exports = router;
