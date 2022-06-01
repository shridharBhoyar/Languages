
var app=angular.module("mymodule",[]);
app.controller("mycontroller",function($scope){
   $scope.number=0;
   $scope.myfunction=function() {
       $scope.number++;
   };

});