require('angular');
require('angular-ui-router');
var factories = require('./factories');

var app = angular.module('nutr', ['ui.router', 'nutrFactories'])
.controller('HomeController', function($scope, apiFact){
  $scope.sendReq = function(keyEvent){
    if (keyEvent.which === 13) {
      apiFact.search($scope.val)
        .then(function(resp){
          $scope.results = resp.data.hits;
        });
    }
  };
});
