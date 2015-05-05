var app = angular.module('PreSchool');

app.controller('contactCtrl', function($scope, $http){


//current example
$scope.sendmail = function () {
var dataToPost = {to: “trentdensley@gmail.com”}; /* PostData*/
$http({
    url: "/send", 
    method: "GET",
    params: {to: dataToPost.to}
 }).success(function(serverResponse) {
console.log(serverResponse);
}).error(function(serverResponse) {
console.log(serverResponse);
});
};


});