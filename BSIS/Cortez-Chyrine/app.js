var app = angular.module('GuessTheNumber',[]);
app.controller('GuessItCtrl', GuessItCtrl);

function GuessItCtrl($scope) {  

    $scope.verifyGuess = function () {
        $scope.deviation = $scope.original - $scope.guess;
        $scope.noOfTries = $scope.noOfTries + 1;
    }

    $scope.initializeGame = function () {
        $scope.noOfTries = 0;
        $scope.original = Math.floor((Math.random() * 100) + 1);
        $scope.guess = null;
        $scope.deviation = null;
    }

    $scope.initializeGame();
}