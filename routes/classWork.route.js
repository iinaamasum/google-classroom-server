const {
  postClassWork,
  postWorkFile,
  getAllClassWork,
  getClassWorkById,
  getRequestedFile,
  deleteClassWorkByIdWithFile,
} = require('../controllers/classWork.controller');
const { getClassById } = require('../controllers/newClass.controller');
const fileUploader = require('../middlewares/fileUploader');
const router = require('express').Router();

router.post('/file-upload', fileUploader.single('workFile'), postWorkFile);
router.route('/').post(postClassWork).get(getAllClassWork);
router.get('/file-download/:fileName', getRequestedFile);
router.route('/:id').get(getClassWorkById).delete(deleteClassWorkByIdWithFile);

module.exports = router;
