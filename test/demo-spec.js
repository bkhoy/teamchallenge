/*
* demo-spec.js
* Created: Friday November 13, 2015
* Created By: J. Benjamin Leeds
*/
'use strict'

describe('Sign-up validation page', function(){

    beforeEach(function() {
        // reload the page before each test

        browser.get('http://localhost:8000');

        //browser.get('http://localhost:8000');
        browser.get('http://localhost:8000/teamchallenge/');

        // browser.get('http://localhost:8000/code/teamchallenge/'); *** For Benjamin's tests, delete before submission ***
    });

	it('should show an error message when email address is left blank after the user has touched it', function(){
        $('#email').click(); // touch the email input
        $('#firstName').click(); // touch something else and leave the input blank

        expect( $('#forgotEmail').isDisplayed() ).toEqual(true);
	});

    it('should show an error message with INVALID email', function() {
        $('#email').sendKeys('bad email haha xD'); //tests with an invalid email

        expect( $('#invalidEmail').isDisplayed() ).toEqual(true); //shows the invaild email message prompting the user to enter a valid email
    });

    it('should show no error message with VALID email', function() {
        $('#email').sendKeys('goodemail@info343.com'); //tests email with a valid email
        
        expect( $('#invalidEmail').isDisplayed() ).toEqual(false); //no error should be displayed
        expect( $('#forgotEmail').isDisplayed() ).toEqual(false);
    });

    it('should show an error message when last name text input is left blank after the user has touched it', function(){
        $('#lastName').click(); // touch the last name input
        $('#firstName').click(); // touch something else and leave the input blank

        expect( $('#forgotLastName').isDisplayed() ).toEqual(true);
    });

    it('should show the success bootstrap alert paragraph above the form when submit is successfully clicked', function(){
        $('#email').sendKeys('leeds@uw.edu');
        $('#lastName').sendKeys('Leeds');
        $('#birthdate').sendKeys('September 29, 1990');
        $('#submit').click(); //attempt to click the submit button
        expect( $('#success').isDisplayed() ).toEqual(true); // expect the success alert paragraph to be displayed
    });

    it('should show an error if the birthdate is left blank after the user has touched it', function() {
        $('#birthdate').click(); //touches the birthdate input without typing any information
        $('#lastName').click(); //touch something else, in this case, the last name input 

        expect($('#forgotBirthdate').isDisplayed()).toEqual(true); //expect to show the error message to remind the user to enter their birthdate
    });

    it('should show an error if the birthdate is not valid', function() {
        $('#birthdate').sendKeys('NotMyBirthday 19, 1995'); //tests a non-valid birthdate

        expect($('#invalidBirthdate').isDisplayed()).toEqual(true); //expect to show the error message to prompt user to enter a valid birthdate
    });

    it('should show an error if the user is not old enough', function() {
        $('#birthdate').sendKeys('11/15/2011'); //tests the user's age less than 13

        expect($('#tooYoung').isDisplayed()).toEqual(true); //shows the error message that the user is too young to sign up
    });

    it('should not show an error if the birthdate with slashes is VALID', function() {
        $('#birthdate').sendKeys('11/15/95'); //tests a valid birthdate with the slashes

        expect($('#invalidBirthdate').isDisplayed()).toEqual(false); //no error message should be displayed
        expect($('#tooYoung').isDisplayed()).toEqual(false);
        expect($('#forgotBirthdate').isDisplayed()).toEqual(false);
    });
    
    it('should not show an error if the birthdate with English dates is VALID', function() {
        $('#birthdate').sendKeys('November 23, 1995'); //tests a valid birthdate fully written out

        expect($('#invalidBirthdate').isDisplayed()).toEqual(false); //no error message should be displayed
        expect($('#tooYoung').isDisplayed()).toEqual(false);
        expect($('#forgotBirthdate').isDisplayed()).toEqual(false);
    });

})