/**
 * Created by arinovich.anatoli on 18.07.2017.
 */
/**
 * Created by arinovich.anatoli on 18.07.2017.
 */
/**
 * Created by arinovich.anatoli on 12.07.2017.
 */
'use strict';
angular.module('gabbroApp')
    .controller('DetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

        $scope.detailId = $routeParams.detailId;

        $http({
            method: 'GET',
            url: 'json/details/'+$scope.detailId+'.json'
        }).then(function successCallback(res) {
            $scope.detail = res.data;
            $scope.active=$scope.detail.preview[0];
        }, function errorCallback(res) {
            console.log(res);
        });

        $scope.ActiveImage = function (node) {
            $scope.active = node;
        };


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
