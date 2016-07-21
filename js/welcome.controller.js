(function() {
  'use strict';

  angular
    .module('app')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['$log', '$state'];

  function WelcomeController($log, $state) {
    var vm = this;

    $log.info('WelcomeController loaded');

    vm.eventsList = [
      {
        dj: "Khai & Cyn",
        date: "Friday, August 1st",
        venue: "Sound",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/06/070116_khai_cyn.jpg"
      },
      {
        dj: "Dirty South",
        date: "Saturday, August 2nd",
        venue: "Avalon",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/05/070216_avalon_lg.jpg"
      },
      {
        dj: "Branchez",
        date: "Friday, July 22nd",
        venue: "Create",
        image: "https://d1w5e52g85ucd3.cloudfront.net/static/images/external/img/create/3414/1/logo/branchez-w-vincent.jpg"
      },
      {
        dj: "Nathan Scott",
        date: "Saturday, July 23rd",
        venue: "SLS",
        image: "https://d1w5e52g85ucd3.cloudfront.net/static/images/external/img/create/3412/1/logo/sultan-shepard-support-nathan-scott.jpg"
      },
      {
        dj: "Goldfish",
        date: "Saturday, July 23rd",
        venue: "Avalon",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/06/072316_avalon_lg.jpg"
      }
    ];

  };

})();
