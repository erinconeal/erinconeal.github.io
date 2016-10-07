angular.module('chuckApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    url: '/'
  })
  .state('about', {
    templateUrl: 'about/about.html',
    controller: 'aboutCtrl',
    url: '/about'
  })
  .state('search', {
    templateUrl: 'search/search.html',
    controller: 'searchCtrl',
    url: '/search'
  })
})
