(function() {
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('welcome', {
        url:          '/welcome',
        templateUrl:  '/js/layouts/welcome.html',
        controller:   'WelcomeController',
        controllerAs: 'vm'
      })
      .state('events', {
        url:         '/event',
        templateUrl: '/js/layouts/event.html'
      })
      .state('contact', {
        url:         '/contact',
        templateUrl: '/js/layouts/contact.html'
      });

      $urlRouterProvider.otherwise('/welcome');
  }
})();
