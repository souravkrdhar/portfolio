var apps = angular.module('portfolio',['ngRoute']);

var theWork={};

apps.config(['$routeProvider','$locationProvider',
    function($routeProvider){
        $routeProvider.
            when('/Home',
            {
                templateUrl: 'partialPages/mainPage.html',
                controller: 'appControl'
            }).
            when('/viewWorkDetail',
            {
                templateUrl: 'partialPages/workDetail.html',
                controller: 'workViewControl'
            })
            .otherwise(
            {
                redirectTo:'/Home'
            });
    }]);

apps.controller('appControl', ['$scope','$rootScope','$location',
    function($scope,$rootScope,$location){
        $scope.workdetails = workdetails;
        $scope.viewWorkDetail = function(index){
            clickedOne = index;
            $location.path('/viewWorkDetail');
        };
    }
]);

apps.controller('workViewControl',['$scope','$rootScope',
    function($scope,$rootScope){
        $scope.theWork = workdetails[clickedOne];
        //alert('gege'+$scope.theWork+clickedOne);
    }
]);





