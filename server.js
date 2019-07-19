//NODE DEPENDENCIES || PACKAGES
var express = require('express');
var exphbs = require('express-handlebars');
var apiRoutes = require('./controllers/apiRoutes.js');
var htmlRoutes = require('./controllers/htmlRoutes.js');
var app = express();

//PORT
var PORT = process.env.PORT || 3000;

//PUBLIC
app.use(express.static('public'));

//MIDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//ROUTES
app.use(apiRoutes);
app.use(htmlRoutes);

//LISTEN
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

//separation of concerns
