var app=angular.module("mod",[]);

app.controller("mycontro",function($scope,$window){

    $scope.popalert=function(nam){
               $window.alert("hii shri");
    }
});