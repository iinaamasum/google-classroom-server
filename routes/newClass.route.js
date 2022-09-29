const {
  postNewClass,
  getAllClass,
  deleteClassById,
  getClassById,
  patchClassById,
} = require('../controllers/newClass.controller');

const router = require('express').Router();

router.route('/class').post(postNewClass).get(getAllClass);

router
  .route('/class/:id')
  .delete(deleteClassById)
  .get(getClassById)
  .patch(patchClassById);

module.exports = router;
