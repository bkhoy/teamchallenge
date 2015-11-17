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
        $('#email').sendKeys('bad email haha xD');

        expect( $('#invalidEmail').isDisplayed() ).toEqual(true);
    });

    it('should show no error message with VALID email', function() {
        $('#email').sendKeys('goodemail@info343.com');
        
        expect( $('#invalidEmail').isDisplayed() ).toEqual(false);
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
        $('#birthdate').click();
        $('#lastName').click();

        expect($('#forgotBirthdate').isDisplayed()).toEqual(true);
    });

    it('should show an error if the birthdate is not valid', function() {
        $('#birthdate').sendKeys('NotMyBirthday 19, 1995');

        expect($('#invalidBirthdate').isDisplayed()).toEqual(true);
    });

    it('should show an error if the user is not old enough', function() {
        $('#birthdate').sendKeys('11/15/2011');

        expect($('#tooYoung').isDisplayed()).toEqual(true);
    });

    it('should not show an error if the birthdate format is VALID', function() {
        $('#birthdate').sendKeys('11/15/95');

        expect($('#invalidBirthdate').isDisplayed()).toEqual(false);
        expect($('#tooYoung').isDisplayed()).toEqual(false);
        expect($('#forgotBirthdate').isDisplayed()).toEqual(false);
    });
    


})