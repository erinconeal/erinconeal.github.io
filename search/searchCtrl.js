angular.module('chuckApp')
.controller('searchCtrl', function($scope, chuckSrv) {

  $scope.getJokes = function(input) {
    chuckSrv.getJokes(input)
    .then(function(jokeArr) {
      // console.log(jokeArr);
      $scope.quotes = jokeArr;
      for (var i = 0; i < $scope.quotes.length; i++) {
        $scope.quotes[i].joke = $scope.quotes[i].joke.split('&quot;').join('\"');
      }
    })
  }
})
