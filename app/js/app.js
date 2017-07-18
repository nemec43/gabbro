/**
 * Created by arinovich.anatoli on 12.07.2017.
 */
var gabbroApp = angular.module('gabbroApp',['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap'])

gabbroApp.config(['$routeProvider', '$locationProvider',  function ($routeProvider ,$locationProvider) {
  // $locationProvider.html5Mode({
  //     enable: true,
  //     requireBase: false
  // });
  $routeProvider
    .when('/',{
      templateUrl:'views/home.html',
      controller:'HomeCtrl'
    })
    .when('/service',{
      templateUrl:'views/service.html',
      controller:'ServiceCtrl'
    })
    .when('/contact',{
      templateUrl:'views/contact.html',
      controller:'ContactCtrl'
    })
    .when('/portfolio',{
      templateUrl:'views/portfolio.html',
      controller:'PortfolioCtrl'
    })
    .when('/portfolio/:detailId',{
      templateUrl:'views/detail.html',
      controller:'DetailCtrl'
    })
    .when('/blog',{
      templateUrl:'views/blog.html',
      controller:'BlogCtrl'
    })
    .when('/blog/:detailId',{
      templateUrl:'views/blogDetails.html',
      controller:'BlogDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

}])

