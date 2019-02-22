const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose_express_todos', { useNewUrlParser: true })
  .then(function(){
    console.log('Database connected.');
  });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);


app.listen(3000, function() {
   console.log("Listening on port 3000");
});
