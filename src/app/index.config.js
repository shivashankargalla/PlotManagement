(function() {
  'use strict';

  angular
    .module('pip')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {
      // Enable log
      $logProvider.debugEnabled(true);

      // Set options third-party lib
      toastrConfig.allowHtml = true;
      toastrConfig.timeOut = 3000;
      toastrConfig.positionClass = 'toast-top-right';
      toastrConfig.preventDuplicates = true;
      toastrConfig.progressBar = true;

      ///$authProvider.baseUrl = 'http://localhost:8080';
      $authProvider.google({
          url: '/googlesignin',
          clientId:'92208181413-5f19jn5j14k2tgirsq5p30qf42fpo3kq.apps.googleusercontent.com',
          redirectUri:'http://localhost:3000/googlesignin'
      });
  }

})();
