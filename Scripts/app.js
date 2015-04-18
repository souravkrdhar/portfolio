var apps = angular.module('portfolio',['ngRoute']);

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
            }).
            when('/viewAboutMe',
            {
                templateUrl: 'partialPages/aboutMe.html',
                controller: 'AboutMeControl'
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
            $rootScope.clickedOne = index;
            $location.path('/viewWorkDetail');
        };
        $rootScope.viewAboutMe = function(){
            $location.path('/viewAboutMe');
        };
        $rootScope.viewHome = function(){
            $location.path('/Home');
        };
    }
]);

apps.controller('workViewControl',['$scope','$rootScope',
    function($scope,$rootScope){
        if($rootScope.clickedOne !== undefined){
            $scope.theWork = workdetails[$rootScope.clickedOne];
            sessionStorage.clickedOne = JSON.stringify($rootScope.clickedOne );
        }
        else{
            $scope.theWork = workdetails[JSON.parse(sessionStorage.clickedOne || 0)];
        }
    }
]);

apps.controller('AboutMeControl',['$scope','$rootScope','$location',
    function($scope,$rootScope,$location){
        $scope.me = me;

        $rootScope.viewAboutMe = function(){
            $location.path('/viewAboutMe');
        };
        $rootScope.viewHome = function(){
            $location.path('/Home');
        };
    }

]);





