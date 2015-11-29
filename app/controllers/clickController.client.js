﻿'use strict';

(function () {
 var appUrl = window.location.origin;
angular
  .module('clementineApp', ['ngResource'])
  .service('myUser', function($http, $q){
     var displayname = ""
     var id = "";
     var username = "";
     var publicRepos = "";
     var color = "blue";
     this.user = {};
     
     var url = appUrl + "/api/:id";
     
     this.getUserInfo = function() {
        var deferred = $q.defer();
        $http({
           method: "GET",
           url: url
        }).success(function(data) {
           deferred.resolve(data);
        }).error(function() {
          deferred.reject("There was an error");
        })
        return deferred.promise;
     };
     
     this.getColor = function() {
        return color;
     }
  })
  .controller('clickController', ['$scope', '$resource', '$http', "myUser", function($scope, $resource, $http, myUser) {

     var Click = $resource(appUrl + '/api/:id/clicks', {id: "id"}); 
     
     $scope.getClicks = function() {
        Click.get( function(results) {
           $scope.clicks = results.clicks;
        });
     }
     
     $scope.getClicks(); 
     
     $scope.addClick = function() {
        Click.save(function() {
           $scope.getClicks();
        });
     };
     
     $scope.resetClicks = function() {
        Click.delete( function() {
           $scope.getClicks();
        });
     };
     
     $scope.createUser = function() {
       myUser.getUserInfo()
         .then(function(data) {
            for(var props in data) {
              myUser.user[props] = data[props];
            }
            console.log(myUser.user);
         }, function(data) {
            console.log(data);
         })
     }
     
     console.log(myUser.user);
     
     $scope.createUser();
     
     $scope.displayname = "foo";
     
     $scope.color = myUser.getColor();
  }]);

})();