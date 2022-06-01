var app = angular.module("mymod",[]);
app.controller("mycontroll",function($scope){
$scope.list=["shri","ram","akash","mayur"];

$scope.listt=[{namee:"shri",age:12,surnam:"bhoyar"},
{namee:"ram",age:22,surnam:"shanarkar"},
{namee:"shyam",age:72,surnam:"borkar"},
{namee:"mayur",age:62,surnam:"pip"},
];
});