var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;

  var cors = require('cors');
  app.use(cors());
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});
var routes = require('./api/routes/implDashBoradRoutes'); //importing route
routes(app); //register the route
app.listen(port);

console.log('Jira API server started on: ' + port);