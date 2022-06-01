var app=angular.module("mymod",[]);

app.controller("mycontroll",function($scope,$location){
$scope.url=$location.absUrl();
$scope.protocol=$location.protocol();
$scope.host=$location.host();
$scope.port=$location.port();
});