(function() {
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('welcome', {
        url:         '/welcome',
        templateUrl: '/js/welcome.html'
      })
      .state('events', {
        url:         '/event',
        templateUrl: '/js/event.html'
      })
      .state('contact', {
        url:         '/contact',
        templateUrl: '/js/contact.html'
      });

      $urlRouterProvider.otherwise('/');
  }
})();
