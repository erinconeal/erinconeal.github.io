angular.module('chuckApp')
.service('chuckSrv', function($http, $q) {
  var baseUrl = 'https://api.icndb.com';

  this.getJokes = function(input) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: baseUrl + '/jokes/random/539'
    })
    .then(function(response) {
      // console.log(response)
      var parsedResponse = response.data.value;
      var newArr = [];
      var flag = false;

      for (var i = 0; i < parsedResponse.length; i++) {
        var arr2 = parsedResponse[i].joke.toLowerCase().split(' ');
         if (arr2.indexOf(input.toLowerCase()) !== -1) {
           newArr.push(parsedResponse[i]);
           flag = true;
         }
      }

      if (!flag) {
        deferred.resolve([{joke: 'Term not found'}])
      }

      deferred.resolve(newArr);
    })
    return deferred.promise;
  }

  this.getRandomQuotes = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/jokes/random?exclude=[explicit]'
    })
  }

  this.getBio = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/jokes/random/9'
    })
  }
})
