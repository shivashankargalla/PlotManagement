/**
 * Created by fission on 09-May-16.
 */
(function() {
    'use strict';

    angular
        .module('pip')
        .controller('LoginController',  function($scope, $auth) {
            $scope.authenticate = function(google) {
                $auth.authenticate(google);
            };



        });

})();
