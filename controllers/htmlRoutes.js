var express = require('express');
var router = express.Router();
var connection = require('../config/connection.js');

//express();
//express.Router()

//ROUTES homepage
//get http://localhost:3000/
router.get('/', function(req, res) {
  //SELECT * FROM classroom
  connection.query('SELECT * FROM classroom', function(err, result) {
    if (err) throw err;
    res.render('index', { data: result });
  });
});

router.get('/api/student/:id', function(req, res) {
  //SELECT * FROM classroom

  res.send('hello');
});

module.exports = router;
