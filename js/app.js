'use strict'

angular.module('TeamChallenge',[])
.controller('FormCtrl', ['$scope', function($scope){


    // grabs user's birthdate and check if they are older than 13 years old
    $scope.checkBirthdate = function(response) {

        if (!isNaN(Date.parse(response))) {
            var usersBirthdate = new Date(response);
            var usersYear = usersBirthdate.getFullYear(); 
            var usersMonth = usersBirthdate.getMonth(); 
            var usersDay = usersBirthdate.getDate();  

            var currentDate = new Date(Date.now());
            var thirteenYearsAgo = new Date(Date.now());
            // grab current date 13 years ago
            thirteenYearsAgo.setFullYear(currentDate.getFullYear() - 13); 

            if (usersYear - thirteenYearsAgo.getFullYear() < 0) {
           		$scope.signUp.birthdate.$setValidity('birthdate', true);
            } else if (usersYear - thirteenYearsAgo.getFullYear() == 0) {
                if (usersMonth < thirteenYearsAgo.getMonth()) {
               		$scope.signUp.birthdate.$setValidity('birthdate', true);
                } else if (usersMonth == thirteenYearsAgo.getMonth()) {
                    if (usersDay <= thirteenYearsAgo.getDate()) {
                   		$scope.signUp.birthdate.$setValidity('birthdate', true);
                    } else {
                   		$scope.signUp.birthdate.$setValidity('birthdate', false);
                    }
                } else {
                   	$scope.signUp.birthdate.$setValidity('birthdate', false);
                }
            } else {
                $scope.signUp.birthdate.$setValidity('birthdate', false);
            }
            return false;
        } else {
           // user typed in something not in a date format
           $scope.signUp.birthdate.$setValidity('birthdate', false);
           return true;
        }
    }

    $scope.showAlert = function(){
        console.log("HERE");
        $scope.success = true;
    }


}])



