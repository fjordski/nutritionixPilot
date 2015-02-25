module.exports = angular.module('nutrFactories', [])
.factory('apiFact', function($http){
  var search = function(query){
    return $http({
      method: 'GET',
      url: '/search/'+query+'?results=0%3A20'
    })
    .then(function(resp){
      console.log(resp.data);
    });
  };

  return {
    search: search
  };
});




