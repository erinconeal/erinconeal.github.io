angular.module('chuckApp')
.directive('chuckDir', function() {
  return {
    templateUrl: 'directive/dirTempl.html',
    restrict: 'E'
  }
})
