(function() {
  'use strict';

  angular
    .module('app')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['$log', '$state'];

  function WelcomeController($log, $state) {
    var vm = this;

    var createAddy = "6021 Hollywood Blvd";
    var createWebsite = "www.CreateNightclub.com"
    var createLocation = "https://www.google.com/maps/place/6021+Hollywood+Blvd,+Los+Angeles,+CA+90028/data=!4m2!3m1!1s0x80c2bf47a4157603:0xe7d521403bae1274?sa=X&ved=0ahUKEwil6oagsoPOAhVX2mMKHYR6AQwQ8gEIJTAB";

    var soundAddy = "1642 N Las Palmas Ave";
    var soundWebsite = "www.SoundNightclub.com";
    var soundLocation = "https://www.google.com/maps/place/Sound+Nightclub/@34.1010027,-118.3357833,15z/data=!4m2!3m1!1s0x0:0xcb41caf2c956ca56?sa=X&ved=0ahUKEwjLh6SquoPOAhVE4GMKHSNGCMsQ_BIIgQEwDg";

    var avalonAddy = "1735 Vine St";
    var avalonWebsite = "www.AvalonHollywood.com";
    var avalonLocation = "https://www.google.com/maps/place/AVALON+Hollywood/@34.1027414,-118.3272224,15z/data=!4m2!3m1!1s0x0:0xda97b22eba92addf?sa=X&ved=0ahUKEwiDuK_AwIPOAhUS-GMKHeVvCHwQ_BIIkgEwEA";

    var slsAddy = "2535 S Las Vegas Blvd";
    var slsWebsite = "www.SLSNightclub.com";
    var slsLocation = "https://www.google.com/maps/place/SLS+Las+Vegas,+a+Tribute+Portfolio+Resort/@36.1423552,-115.1567235,15z/data=!4m2!3m1!1s0x0:0x6b876068ced54096?sa=X&ved=0ahUKEwizkJ_owYPOAhURymMKHZBIBXYQ_BIIfzAO";

    $log.info('WelcomeController loaded');

    vm.eventsList = [
      {
        dj: "Khai & Cyn",
        date: "Friday, August 1st",
        venue: "Create",
        info: "21+",
        time: "9PM-4AM",
        addy: createAddy,
        website: createWebsite,
        location: createLocation,
        link: "http://www.sbe.com/nightlife/brands/createnightclub/",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/06/070116_khai_cyn.jpg"
      },
      {
        dj: "Dirty South",
        date: "Saturday, August 2nd",
        venue: "Avalon",
        info: "19+",
        time: "8PM",
        addy: avalonAddy,
        website: avalonWebsite,
        location: avalonLocation,
        link: "http://www.sbe.com/nightlife/brands/createnightclub/",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/05/070216_avalon_lg.jpg"
      },
      {
        dj: "Branchez",
        date: "Friday, July 22nd",
        venue: "Sound",
        info: "21+",
        time: "9PM-2PM",
        addy: soundAddy,
        website: soundWebsite,
        location: soundLocation,
        link: "http://www.sbe.com/nightlife/brands/createnightclub/",
        image: "https://d1w5e52g85ucd3.cloudfront.net/static/images/external/img/create/3414/1/logo/branchez-w-vincent.jpg"
      },
      {
        dj: "Nathan Scott",
        date: "Saturday, July 23rd",
        venue: "SLS",
        info: "21+",
        time: "9PM",
        addy: slsAddy,
        website: slsWebsite,
        location: slsLocation,
        link: "http://www.sbe.com/nightlife/brands/createnightclub/",
        image: "https://d1w5e52g85ucd3.cloudfront.net/static/images/external/img/create/3412/1/logo/sultan-shepard-support-nathan-scott.jpg"
      },
      {
        dj: "Goldfish",
        date: "Saturday, July 23rd",
        venue: "Avalon",
        info: "21+",
        time: "9PM",
        addy: avalonAddy,
        website: avalonWebsite,
        location: avalonLocation,
        link: "http://www.sbe.com/nightlife/brands/createnightclub/",
        image: "http://avalonhollywood.com/wp-content/uploads/2016/06/072316_avalon_lg.jpg"
      }
    ];

  };

})();
