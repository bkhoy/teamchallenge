describe('FormController', function() {

	var controller;

	beforeEach(module("TeamChallenge"));

    beforeEach(inject(function($controller) {
    	
  
    	
    }));

    describe('$scope.passwordStrength', function() {
    	it('calculates the strength of a password', function(){
    		var scope = {};
    		var controller = $controller('FormCtrl', { $scope: $scope });
    		$scope.password = "1234"; // 4 character password
    		$scope.passwordStrength();
    		expect($scope.strengthPercent).toEqual(40);
    	});
    });
});
