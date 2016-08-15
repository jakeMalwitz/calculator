var express = require('express');
var router = express.Router();
var calc;
var solution;

router.post('/multiplication', function(req, res){
  calc = req.body;
  console.log(calc)
  solution = Number(calc.x) * Number(calc.y);
  console.log(solution)
  res.send(solution.toString());
});

router.post('/division', function(req, res){
  calc = req.body;
  console.log(calc)
  solution = Number(calc.x) / Number(calc.y);
  console.log(solution)
  res.send(solution.toString());
});

router.post('/addition', function(req, res){
  calc = req.body;
  console.log(calc)
  solution = Number(calc.x) + Number(calc.y);
  console.log(solution)
  res.send(solution.toString());
});

router.post('/subtraction', function(req, res){
  calc = req.body;
  console.log(calc)
  solution = Number(calc.x) - Number(calc.y);
  console.log(solution)
  res.send(solution.toString());
});

//Potential default error post
router.post('/def', function(req, res){
  res.send("Please clear the calculator!");
});

module.exports = router;
