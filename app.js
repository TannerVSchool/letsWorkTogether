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
<<<<<<< HEAD
    .when("/antonio", {
        templateUrl: "/templates/anthony.html"
=======
    .when("/evan", {
        templateUrl: "/templates/evan.html"
>>>>>>> 73d5c6b39ef5c6d695a95fb7227d4c4fd26bf68d
    })

})
.controller("MainController", ['$scope', function($scope){

    $scope.test = "Hello World";

}]);