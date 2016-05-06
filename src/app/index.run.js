(function() {
  'use strict';

  angular
    .module('pip')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
