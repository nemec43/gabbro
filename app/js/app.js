/**
 * Created by arinovich.anatoli on 12.07.2017.
 */
var gabbroApp = angular.module('gabbroApp',['ngRoute'])

gabbroApp.config(['$routeProvider', '$locationProvider',  function ($routeProvider ,$locationProvider) {
  $routeProvider
    .when('/',{
      templateUrl:'views/home.html',
      controller:'HomeCtrl'
    })
    .when('/contact',{
      templateUrl:'views/contact.html',
      controller:'ContactCtrl'
    })
    .when('/portfolio',{
      templateUrl:'views/portfolio.html',
      controller:'PortfolioCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

}])

