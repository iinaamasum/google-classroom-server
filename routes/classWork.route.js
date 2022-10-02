const { postClassWork } = require('../controllers/classWork.controller');

const router = require('express').Router();

router.route('/').post(postClassWork);

module.exports = router;
