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

})
.controller("MainController", ['$scope', function($scope){

    $scope.test = "Hello World";

}]);