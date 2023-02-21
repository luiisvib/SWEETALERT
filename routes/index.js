const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/delete/:id', function(req, res, next) {
  res.redirect("/delete")
  setTimeout(()=>{
    console.log("hola")
  }, 4000)
});

router.get('/delete', function(req, res, next) {
  res.send("Dato eliminado")
  setTimeout(()=>{
    console.log("hola")
  }, 4000)
});

module.exports = router;
