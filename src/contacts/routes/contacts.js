var express = require('express');
var router = express.Router();
var i=0;
var array=[];

/* GET contacts */
router.get('/:id', function(req, res, next) {
var b=req.params.id;
console.log(array[b]);
res.send(array[b]);

});

router.post('/', function(req, res, next) {
  //console.log(req.body);
var k=req.body;
k.messages=new Array();
array[i]=req.body;
i=i+1;
res.send((i-1)+"");


});

router.put('/:id', function(req, res, next) {

 var k=req.params.id;
array[k].firstName=req.body.firstName;
res.send(array[k]);
});


router.post('/:id',function(req,res,nexr){
var b=req.params.id;
var msg=req.body.message;
array[b].messages.push(msg);
console.log(array[b]);
res.send(array[b].messages[array[b].messages.length-1]);
});
module.exports = router;
