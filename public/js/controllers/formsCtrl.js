var app = angular.module('PreSchool');

app.controller('formsCtrl', function(contents, completed){



	ClabborApp.controller("PostCreateCtrl", ['$scope', 'PostModel',
function($scope, PostModel) {

    $scope.uploadPostImage = function(contents, completed) {
        console.log(completed);
        alert(contents);
    }

}]);

});