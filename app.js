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
    .when("/antonio", {
        templateUrl: "/templates/anthony.html"
    })
    .when("/evan", {
        templateUrl: "/templates/evan.html"
    })
    .when("/michael", {
        templateUrl: "/templates/michael.html"
    })
});
.controller("MainController", ['$scope', function($scope) {

    $scope.test = "Hello World";

}]);
