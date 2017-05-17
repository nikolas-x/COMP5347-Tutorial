var express = require('express');
var router = express.Router();
var controller = require('../controllers/survey.server.controller');

router.get('/', controller.showForm);
router.post('/survey', controller.showResult);
module.exports = router;
