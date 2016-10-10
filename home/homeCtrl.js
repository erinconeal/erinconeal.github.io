angular.module('chuckApp')
.controller('homeCtrl', function($scope, chuckSrv) {

  $scope.getQuote = function() {
    chuckSrv.getRandomQuotes()
    .then(function(response) {
      // console.log(response);
      $scope.quotes = response.data;
      $scope.quotes.value.joke = $scope.quotes.value.joke.split('&quot;').join('\"');
      // console.log($scope.quotes)
    })
  }

  $scope.getQuote()
})
