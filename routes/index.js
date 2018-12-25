var express = require('express');
var router = express.Router();
var visualization_report=require('.././controllers/visualization-reporting');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Analytics-reporting' });
});

router.post('/visualization/report',visualization_report.getJSONData);

module.exports = router;
