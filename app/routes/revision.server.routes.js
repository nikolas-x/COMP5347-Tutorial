var express = require('express');
var router = express.Router();
var controller = require('../controllers/revision.server.controller');

router.get('/revision', controller.showTitleForm);
router.get('/getLatest', controller.getLatest);
module.exports = router;
