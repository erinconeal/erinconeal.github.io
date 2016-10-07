angular.module('chuckApp')
.controller('searchCtrl', function($scope, chuckSrv) {

  $scope.getJokes = function(input) {
    chuckSrv.getJokes(input)
    .then(function(response) {
      console.log(response);
      $scope.quotes = response;
      // $scope.quotes = quotes.replace(/&quot;/g, '\\"');
    })
  }
})
