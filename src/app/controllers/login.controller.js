/**
 * Created by fission on 09-May-16.
 */
(function() {
    'use strict';

    angular
        .module('pip')
        .controller('LoginController',  function($scope,$http, $auth,$state, $stateParams) {
            $scope.authenticate = function(google) {
                $auth.authenticate(google);
            };


           /* console.log($state, $stateParams);
            var code =$stateParams.code;

            var req = {
                method: 'POST',
                url: '/googlesignin',
                headers: {  code:code}
            };
            debugger;
            $http(req).then(function(response){
            console.log(response);
            }, function(response){

            });*/



        });

})();

