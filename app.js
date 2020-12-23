(function () {
    'use strict';
    
    angular.module('LunchCheckApp', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.checkDishes = function () {
        var n = countDishes($scope.dishes);
        $scope.message = displayMessage(n);
      };
    
      function countDishes(dishes) {
        var count = 0;
        if (dishes) {
          var array = dishes.split(',');
          for (var i in array) {
            if (array[i].trim().length != 0) {
              count++;
            }
          }
        }
        return count;
      }
    
      function displayMessage(n) {
        if (n === 0) {
          return 'Please enter data first';
        }
        else if (n <= 3) {
          return 'Enjoy!';
        } else {
          return 'Too much!';
        }
      }
    }
    
    })();