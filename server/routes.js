var routeController = require('./controller');

module.exports = function(app){
  app.get('*', routeController);
};
