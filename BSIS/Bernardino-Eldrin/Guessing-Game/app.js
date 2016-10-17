var app = angular.module('app', []);
	app.controller('appCtrl', ['$scope', function($scope){
        $scope.verifyGuess = function() {
            $scope.deviation = $scope.original - $scope.guess;
            $scope.noOfTires= $scope.noOfTires+ 1;
        } 
        $scope.initializeGame = function() {
            $scope.guess = null;
            $scope.original = Math.floor(Math.random() * 1000 + 1);
            $scope.noOfTires = 0;
            $scope.deviation = null;
            $scope.display = false;
        }
        $scope.initializeGame();
    }]);