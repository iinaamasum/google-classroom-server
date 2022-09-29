const {
  postNewClass,
  getAllClass,
  deleteClassById,
  getClassById,
} = require('../controllers/newClass.controller');

const router = require('express').Router();

router.route('/class').post(postNewClass).get(getAllClass);

router.route('/class/:id').delete(deleteClassById).get(getClassById);

module.exports = router;
