'use strict';

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
  }).
  service('userValidation', function($http, $q) {
     this.userNameValidate = function(name) {
        if(name == null || name.length === 0 || name === "") {
           console.log("not valid");
           return false;
        }
        return true;
     }
     
     this.emailValidation = function(email) {
        if(email == null || email.length === 0 || email === "") {
           return "Not a valid user email";
        }
     }
     
     this.passwordValidation = function(password) {
        if(password == null || password.length === 0 || password === "") {
           return "Not a valid user password";
        }
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
         }, function(data) {
            console.log(data);
         })
     }
     
     //console.log(myUser.user);
     
     $scope.createUser();
     
     $scope.displayname = "foo";
     
     $scope.color = myUser.getColor();
  }]).
  controller('ContactCtrl', ['$scope', '$resource', '$http', 'userValidation', function($scope, $resource, $http, myUser, userValidation) {
      $scope.user = {};

      var validPhoneNo = function () {
     
      }
     $scope.validateForm = function() {
       var validation = false;
       
       if(!userValidation.userNameValidate($scope.user.name)) {
         console.log("User name is invalid");    
       } else if(!userValidation.emailValidation($scope.user.email)) {
         console.log("User email is invalid");         
       } else if(!userValidation.passwordValidation($scope.user.password)) {
          console.log("Password is invalid");
       }
       
     };
  }]).
  controller('SignUpCtrl', ['$scope', '$http', '$resource','userValidation', function($scope, $http, $resouce, userValidation) {
   
     $scope.validateForm = function() {
      console.log("hello");
        if(!userValidation.userNameValidate($scope.user.name)){
           console.log("User name is invalid.");
        } else if(!userValidation.emailValidation($scope.user.email)){
           console.log("User email is invalid.");
        } else if(!userValidation.passwordValidation($scope.user.password)){
           console.log("Password is invalid");
        }
     }
  }])

})();