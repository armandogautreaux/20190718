var express = require('express');
var router = express.Router();

//post
router.post('/api/post', function(req, res) {
  console.log(req.method);
  console.log(req.body);
  res.send('/api/post working');
});

//<a href="/api/update/{{id}}">go to my page</a>
//get ///api/:firstcity/:secondcity/:day/:date?
//get //fly.com/api/toronto/atlanta/monday
//update
router.put('/api/update/:id', function(req, res) {
  console.log(req.method);
  console.log(req.params.id);
  console.log(req.params.name);
  console.log(req.params.email);
  res.send(`/api/update/${req.params.id} working`);
});

//delete
router.delete('/api/delete/:id', function(req, res) {
  console.log(req.method);
  console.log(req.params.id);
  res.send(`/api/delete/${req.params.id} working`);
});

module.exports = router;
