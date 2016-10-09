angular.module('chuckApp')
.controller('searchCtrl', function($scope, chuckSrv) {

  $scope.getJokes = function(input) {
    chuckSrv.getJokes(input)
    .then(function(jokeArr) {
      // console.log(response);
      $scope.quotes = jokeArr;
      // $scope.quotes = quotes.replace(/&quot;/g, '\\"');
    })
  }
})
