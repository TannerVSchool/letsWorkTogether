angular.module("TeamApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({
                templateUrl: "/templates/home.html"
            })
            .when("/home", {
                templateUrl: "/templates/home.html"
            })
            .when("/tanner", {
                templateUrl: "/templates/tanner.html"
            })
            .when("/devin", {
                templateUrl: "/templates/devin.html"
            })
<<<<<<< HEAD
            .when("/shan", {
                templateUrl: "/templates/shan.html"
=======
            .when("/agustin", {
                templateUrl: "/templates/agustin.html"
>>>>>>> 1f326369b870fd9c8c39e056b3db052ec2172e95
            })

    })
    .controller("MainController", ['$scope', function ($scope) {

        $scope.test = "Hello World";

    }]);