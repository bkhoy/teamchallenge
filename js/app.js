'use strict'

angular.module('TeamChallenge',[])
.controller('FormCtrl', ['$scope', function($scope){


    // grabs user's birthdate and see if they are older than 13 years old
    $scope.checkBirthdate = function(response) {

        if (!isNaN(Date.parse(response))) {
            var usersBirthdate = new Date(response);
            var usersYear = usersBirthdate.getFullYear(); 
            var usersMonth = usersBirthdate.getMonth(); 
            var usersDay = usersBirthdate.getDate();  

            var currentDate = new Date(Date.now());
            var thirteenYearsAgo = new Date(Date.now());
            thirteenYearsAgo.setFullYear(currentDate.getFullYear() - 13); 

            if (usersYear - thirteenYearsAgo.getFullYear() < 0) {
                console.log("Yay youre old enough");
                return true;
            } else if (usersYear - thirteenYearsAgo.getFullYear() == 0) {
                if (usersMonth < thirteenYearsAgo.getMonth()) {
                    console.log("Yay youre old enough");
                    return true;
                } else if (usersMonth == thirteenYearsAgo.getMonth()) {
                    if (usersDay <= thirteenYearsAgo.getDate()) {
                        console.log("Yay youre old enough");
                        return true;
                    } else {
                    // show error message sayin "u r 2 yung kid. 'git' outta here"
                    // (user too young)
                    }
                } else {
                    // show error message sayin "u r 2 yung kid. 'git' outta here"
                    // (user too young)
                }
            } else {
                // show error message sayin "u r 2 yung kid. 'git' outta here"
                // (user too young)
            }
        } else {
            console.log("pls enter valid birthday");
            // also show error message saying "Please enter a valid birthday"
        }
    }


}])



