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
        $scope.success = true;
    }

    $scope.passwordStrength = function(){

        // *** presently a bug if user deletes password after entering one
        var pLength = $scope.password.length; // the length of the password
        var suggestedLength = 10; // the suggested minimum length of a password
        var strengthFraction = 0; // initialize local variable

        // check if the password is greater than the suggested minimum length
        if(pLength > suggestedLength){
            strengthFraction = 1;
        } else{
            strengthFraction = pLength / 10;
        }

        $scope.strengthPercent = strengthFraction * 100; // sace to scope

        // increase or decrease bar length
        $('#strength-indicator').attr("style","width: " + $scope.strengthPercent + "%;");

        // change password bar 
        $('#strength-indicator').toggleClass("progress-bar-danger", $scope.strengthPercent <= 25);
        $('#strength-indicator').toggleClass("progress-bar-warning", $scope.strengthPercent > 25 && $scope.strengthPercent <= 75);
        $('#strength-indicator').toggleClass("progress-bar-success", $scope.strengthPercent > 75);

        // account for users on screenreaders
        $('#strength-indicator').attr("aria-valuenow",$scope.strengthPercent);
        $('#sr-strength-indicator').text($scope.strengthPercent + "% Complete");
    }
}])



