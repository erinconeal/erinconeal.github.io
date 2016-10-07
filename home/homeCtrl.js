angular.module('chuckApp')
.controller('homeCtrl', function($scope, chuckSrv) {

  $scope.getQuote = function() {
    chuckSrv.getRandomQuotes()
    .then(function(response) {
      // console.log(response);
      $scope.quotes = response.data;
      // $scope.quotes = quotes.replace(/&quot;/g, '\"');
    })
  }

  $scope.getQuote()
})
