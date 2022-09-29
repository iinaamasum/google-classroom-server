const {
  postNewClass,
  getAllClass,
} = require('../controllers/newClass.controller');

const router = require('express').Router();

router.route('/new-class').post(postNewClass).get(getAllClass);

module.exports = router;
