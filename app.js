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
            .when("/shan", {
                templateUrl: "/templates/shan.html"
            })
            .when("/agustin", {
                templateUrl: "/templates/agustin.html"
            })
            .when("/michael", {
                templateUrl: "/templates/michael.html"
            });

    })
    .controller("MainController", ['$scope', function ($scope) {

        $scope.test = "Hello World";

}]);
