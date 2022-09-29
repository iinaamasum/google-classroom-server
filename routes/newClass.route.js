const {
  postNewClass,
  getAllClass,
  deleteClassById,
} = require('../controllers/newClass.controller');

const router = require('express').Router();

router.route('/class').post(postNewClass).get(getAllClass);

router.route('/class/:id').delete(deleteClassById);

module.exports = router;
