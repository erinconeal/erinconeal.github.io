angular.module('chuckApp')
.controller('aboutCtrl', function($scope, chuckSrv) {
  $scope.title = "About Chuck Norris"

  chuckSrv.getBio()
  .then(function(response) {
    // console.log(response);
    $scope.quotes = response.data.value;
  })
})
