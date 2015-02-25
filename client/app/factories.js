module.exports = angular.module('nutrFactories', [])
.factory('apiFact', function($http){
  var search = function(query){
    return $http({
      method: 'GET',
      url: '/search/'+query+'?results=0%3A20'
    })
    .catch(function(err){
      console.log(err);
    });
  };

  return {
    search: search
  };
});




