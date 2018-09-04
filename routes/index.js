var express = require('express');
var router = express.Router();

/*var mydata = [{"id":"1", "name":"sony", "price":"90"},
    {"id":"2", "name":"nokia", "price":"80"},
    {"id":"3", "name":"samsung", "price":"70"}];*/

var mydata = [["1", "sony", "90"],
    ["2", "nokia", "80"],
    ["3", "samsung", "70"]];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Моя база данных' });
});

router.get('/test', function(req, res, next) {
    res.send(JSON.stringify(mydata));
});


module.exports = router;
