var userJSON, datesJSON;

describe("Valid88 Tests", function() {
    
    beforeEach(function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", '../../spec/testfiles/user-details.json', false );
        xmlHttp.send( null );
        userJSON = JSON.parse(xmlHttp.responseText);

        xmlHttp.open( "GET", '../../spec/testfiles/date-tests.json', false );
        xmlHttp.send( null );
        datesJSON = JSON.parse(xmlHttp.responseText);

    });
    
    describe('When there\'s a mandatory validation configured', function(){
       
        it("all fields fail", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:null};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(3);      
            expect(result.status).toBe('fail');      
        });

        it("all name fields fail", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:null, lastname:null, dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(2);
            expect(result.status).toBe('fail');      
        });

        it("all fields pass", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:'Joe', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);      
        });

    });

    describe('When there\'s a regex validation configured', function(){

        it("all fields pass", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:'Joe', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);      
        });

        it("firstname fails", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:'Joe 1', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
        });

        it("special character passes", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:'Joe O\'Connell', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);      
        });

    });

    describe('When there\'s a maxlength validation configured', function(){

        it("very long firstname fails", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {firstname:'this is some very long text which should\'t be allowed', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');
        });

    });

    describe('When there\'s a date validation configured', function(){

        it("valid dob years", function() {

            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setFullYear(date.getFullYear() - 20);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_yrs', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);      

        });

        it("invalid dob years - too young", function() {

            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);
    
            var date = new Date();
            date.setFullYear(date.getFullYear() - 16);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_yrs', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
    
        });

        it("invalid dob years - too old", function() {

            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);
    
            var date = new Date();
            date.setFullYear(date.getFullYear() - 81);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_yrs', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');
    
        });

        it("valid dob months", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setMonth(date.getMonth() - 20);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_mths', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);
  
        });

        it("in valid dob months - too young", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setMonth(date.getMonth() - 9);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_mths', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
  
        });

        it("in valid dob months - too old", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setMonth(date.getMonth() - 61);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_mths', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
  
        });

        it("valid dob days", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setDate(date.getDate() - 40);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_days', {user:user});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);
  
        });

        it("invalid dob days - too young", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setDate(date.getDate() - 20);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_days', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
  
        });

        it("invalid dob days - too old", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var date = new Date();
            date.setDate(date.getDate() - 100);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_days', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
  
        });

        it("invalid dob before", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var dob = new Date();
            dob.setFullYear(dob.getFullYear() - 18);
            var refDate = new Date();
            refDate.setFullYear(refDate.getFullYear() - 17);      
            var user = {firstname:'Joe', lastname:'Bloggs', dob:dob};
            var result = v88.validateInput('dob_before', {user:user}, {test_date:refDate});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);
  
        });

        it("valid dob before", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var dob = new Date();
            dob.setFullYear(dob.getFullYear() - 18);
            var refDate = new Date();
            refDate.setFullYear(refDate.getFullYear() - 17);      
            var user = {firstname:'Joe', lastname:'Bloggs', dob:dob};
            var result = v88.validateInput('dob_before', {user:user}, {test_date:refDate});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);
  
        });

        it("invalid dob after", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var dob = new Date();
            dob.setFullYear(dob.getFullYear() - 18);
            var refDate = new Date();
            refDate.setFullYear(refDate.getFullYear() - 17);      
            var user = {firstname:'Joe', lastname:'Bloggs', dob:dob};
            var result = v88.validateInput('dob_after', {user:user}, {test_date:refDate});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
  
        });

        it("valid dob after", function() {
  
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(datesJSON);

            var dob = new Date();
            dob.setFullYear(dob.getFullYear() - 17);
            var refDate = new Date();
            refDate.setFullYear(refDate.getFullYear() - 18);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:dob};
            var result = v88.validateInput('dob_after', {user:user}, {test_date:refDate});
            expect(result.errors.length).toBe(0);
            expect(result.status).toEqual(undefined);
  
        });

    });

});
