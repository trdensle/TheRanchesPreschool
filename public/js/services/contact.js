var app = angular.module('PreSchool');

app.service('contact', function($http){

	//first example
return {
     postEmail: function(emailData,callback){
      $http.post("/postEmail/", emailData).success(callback);  
     }
   }

});