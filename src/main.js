alert(hello);

;(function(){ //IIFE for angular

  angular.module('tmc', ['ngRoute'], function($routeProvider){
      $routeProvider
        .when('/',{
          redirectTo: 'Welcome'
        })
        .when('/Welcome', {
          templateUrl: 'partials/Welcome.html'
        })
        .when('/Portfolio', {
          templateUrl: 'partials/Portfolio.html'
        })
        .when('/Blog', {
          templateUrl: 'partials/daily-report.html'
        })
        .otherwise({
          redirectTo: '/404.html',
          templateUrl: 'partials/404.html'
        })
    })

    .controller('MainController', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    })

    // .run(function($http, $rootScope){
    //   $http.get("https://")
    //     .then(function(response){
    //       $rootScope.activities = response.data;
    //     });
    // })


})(); //end IIFE
