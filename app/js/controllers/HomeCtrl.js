'use strict';
angular.module('gabbroApp')
  .controller('HomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    // $http({
    //   method: 'GET',
    //   url: '/cars_details.json'
    // }).then(function successCallback(res) {
    //   $scope.autos = res.data;
    // }, function errorCallback(res) {
    //   console.log(res);
    // });
    //
    // $scope.Active = function(data){
    //   console.log(data);
    // };
    // $scope.openDetails =function () {
    //   window.scrollTo(0, 0);
    //   $state.go('root.404');
    // };
    // $scope.OpenState = function (data, param) {
    //   $state.go('root'+data, {param: param});
    // };
    //
    // $scope.ClickCars = function (data) {
    //   $scope.description = data.desc;
    //   $scope.src = data.src;
    // };
    // $scope.stateGo = function (data, stateParams, $event) {
    //   if(data !=='#/'){
    //     $state.go(data, {param: stateParams});
    //     if($event){
    //       $event.stopPropagation();
    //     }else{
    //       // event.stopPropagation();
    //       $event.stopPropagation();
    //       $event.preventDefault();
    //     }
    //   }
    // };

  }]);
