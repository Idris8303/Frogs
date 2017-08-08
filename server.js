const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const frogRoutes = require('./routes/Frogs');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;




const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/',frogRoutes);


let url = 'mongodb://localhost:27017/Frog';

mongoose.connect(url, { useMongoClient: true }).then(function(){
  console.log('connected to the Database');
});



  app.listen(3000, function(){
    console.log('Listening on port 3000');
  });
