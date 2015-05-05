angular.module('PreSchool').controller('homeCtrl', function($scope){




















// // adding comments to firebase ==============================
// var fbRef = new Firebase("https://preschool.firebaseio.com/comments");
// var fbComments = $firebase(fbRef)

//  $scope.syncComments = fbComments.$asArray();


// $scope.ServiceComments = ServiceComments[0];

// $scope.saveComments = function(comment) {
// 	//taking syncComments, which is attached to my firebase and adding (comments)
// 	$scope.syncComments.$add({comment: comment});
// 	$scope.comment = '';
// };


            // link: function(scope, elem, attrs){
            //     scope.currentComment = ''; //where comments will be stored
            //     var animator = function(arr, index){  //animator takes in arr of comments
            //         scope.currentComment = arr[index]; //
            //         elem.fadeIn(function(){
            //             elem.fadeOut(function(){
            //                 if(!arr[index+1]){
            //                     animator(arr, 0)
            //                 } else {
            //                     animator(arr, index+1)
            //                 }
            //             })
            //         })
            //     };
            //     animator(scope.list, 0)
            // };


// Pull from comments array =============================

// fbRef.on("child_added", function(snapshot) {
//   console.log(snapshot.val());
// });






});

