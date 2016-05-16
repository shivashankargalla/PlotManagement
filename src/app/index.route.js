(function() {
  'use strict';

  angular
    .module('pip')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'LoginController'
        })

        .state('showMap', {
          url: '/showMap',
          templateUrl: 'app/views/test.html',
          controller: 'testController'
      });


      /*$locationProvider.html5Mode(true);*/
    $urlRouterProvider.otherwise('/login');
  }

})();
