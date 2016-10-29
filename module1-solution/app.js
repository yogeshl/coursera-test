(function(){

'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.message ='';
  $scope.lunchItems = '';
   $scope.checkLunch = function(){

     if(!$scope.lunchItems){
       $scope.message = 'Please enter data first';
     }
     else{

         var items = $scope.lunchItems.split(',');
         if(items.length <= 3){
           $scope.message = 'Enjoy!';
         }
         else if(items.length > 3){
           $scope.message = 'Too much!';
         }

     }

   };

};


})();
