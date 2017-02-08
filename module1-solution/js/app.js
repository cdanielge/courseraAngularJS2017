// (function () {
// 'use strict';

// angular.module('LunchCheck', [])

// .controller('LunchCheckController', LunchCheckController)

// LunchCheckController.$inject=['$scope'];

// function LunchCheckController ($scope) {
//   $scope.check = function(){
//     if ($scope.menu){
//         var len = $scope.menu.split(',').length - checkEmpty($scope.menu.split(','))
//         if(len == 0){$scope.message = "Please enter data first"; return;};
//         $scope.message = (len<=3)?"Enjoy!":"Too much!";

//     }else{
//         $scope.message = "Please enter data first";
//     }
//   }

//   function checkEmpty(array){
//     var empty = 0;
//     angular.forEach(array, function(e, k){
//       if (!e){ empty++;}
//     });
//     return empty;
//   }

// };
// })();
!function(){"use strict";function e(e){function n(e){var n=0;return angular.forEach(e,function(e,t){e||n++}),n}e.check=function(){if(e.menu){var t=e.menu.split(",").length-n(e.menu.split(","));if(0==t)return void(e.message="Please enter data first");e.message=3>=t?"Enjoy!":"Too much!"}else e.message="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();

