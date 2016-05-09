(function() {
  'use strict';

  angular
    .module('pip')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'LoginController'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
