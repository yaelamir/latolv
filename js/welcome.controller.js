(function() {
  'use strict';

  angular
    .module('app')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['$log', '$state'];

  function WelcomeController($log, $state) {
    $log.info('WelcomeController loaded');

    // $('.carousel').carousel({
    //   interval: 2000
    // })

    // var vm = this;

  }
})();
