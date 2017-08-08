const router = require('express').Router();
const Frog = require('../models/frogs');

router.get('/frogs', function(req, res){
  // const db = mongo.db();
  // db.collection('todos').find({}).toArray(function(err, data){
  //   res.render('index', { todos: data});
  // });
  Frog.find({}).then(function(results){
    res.render('frogs', { frogs: results })
  });
});

router.post('/frogs', function(req, res){
  // todosModel.insert(req.body, function(err, result){
  //   res.redirect('/todos');
  // });
  let newFrog = new Frog(req.body);
  newFrog.save().then(function(result){
    console.log(result);
    res.redirect('/frogs');
  })
  .catch(function(err){
    console.log(err);
    res.redirect('/frogs');

  });
});

//
  router.post('/frogs/delete/:id', function(req, res){
//   todosModel.remove(req.params.id, function(err, result){
//     res.redirect('/todos');
//   });

  Frog.deleteOne({ _id: req.params.id}).then(function(){
    res.redirect('/frogs');
  });
});

module.exports = router;
