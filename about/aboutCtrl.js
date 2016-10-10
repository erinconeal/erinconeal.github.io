angular.module('chuckApp')
.controller('aboutCtrl', function($scope, chuckSrv) {
  $scope.title = "About Chuck Norris"

  chuckSrv.getBio()
  .then(function(response) {
    // console.log(response);
    $scope.quotes = response.data.value; //array of objects
    for (var i = 0; i < $scope.quotes.length; i++) {
      $scope.quotes[i].joke = $scope.quotes[i].joke.split('&quot;').join('\"');
    }

  })
})
