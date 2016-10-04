angular.module("TeamApp", ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.otherwise({
        templateUrl: "/templates/home.html"
    })
    .when("/home", {
        templateUrl: "/templates/home.html"
    })
    .when("/tanner", {
        templateUrl: "/templates/tanner.html"
    })
    .when("/evan", {
        templateUrl: "/templates/evan.html"
    })
    .when("/susan", {
        templateUrl: "/templates/susan.html"
    })
})
.controller("MainController", ['$scope', function($scope){

    $scope.test = "Hello World";

}]);