(function() {
  'use strict';

  angular
    .module('app')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['$log', '$state', '$scope'];

  function WelcomeController($log, $state, $scope) {
    $log.info('WelcomeController loaded');
    $('.carousel').carousel({
      interval: 2000
    })
    // var vm = this;

    // $scope.myInterval = 4000;
    // $scope.slides = [
    //   {
    //     image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
    //   },
    //   {
    //     image: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg'
    //   }
    // ];
    // $('.carousel').carousel({
    //   interval: 2000
    // })
  }

})();
