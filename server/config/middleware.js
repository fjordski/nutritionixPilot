var bodyParser = require('body-parser');
var helpers = require('./helpers');
var morgan = require('morgan');

module.exports = function(app, express) {

  var router = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/search/', router); // use sms router for all sms requests

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our router into its respective route file
  require('../routes')(router);
};
