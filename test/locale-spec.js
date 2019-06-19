var userJSON, localeJSON;

const vars = {
    FIRSTNAME:'Prénom',
    LASTNAME:'Nom de famille',
    EMAIL:'Email',
    DOB:'Date de naissance',
};

describe("Valid88 Locale Tests", function() {
    
    beforeEach(function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", '../../spec/testfiles/locale-user.json', false );
        xmlHttp.send( null );
        userJSON = JSON.parse(xmlHttp.responseText);

        xmlHttp.open( "GET", '../src/messages/valid88-messages_fr.json', false );
        xmlHttp.send( null );
        localeJSON = JSON.parse(xmlHttp.responseText);

    });

    describe('When there\'s a localised mandatory validation configured', function()    {
       
        it("all fields fail", function() {
            var v88 = new Valid88.Valid88();
            v88.setLocale(localeJSON);
            v88.registerValidationSet(userJSON);
            v88.setVariables(vars);

            var user = {firstname:null};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(3);      
            expect(result.status).toBe('fail');      
            expect(result.errors[0].code).toBe("MAND_DEFAULT");
            expect(result.errors[1].code).toBe("MAND_DEFAULT");
            expect(result.errors[2].code).toBe("MAND_DEFAULT");
            expect(result.errors[0].message.startsWith("le champ "));
            expect(result.errors[1].message.startsWith("le champ "));
            expect(result.errors[2].message.startsWith("le champ "));
        });

    });

    describe('When there\'s a date validation configured', function(){

        it("invalid dob years - too young", function() {

            var v88 = new Valid88.Valid88();
            v88.setLocale(localeJSON);
            v88.registerValidationSet(userJSON);
            v88.setVariables(vars);

            var date = new Date();
            date.setFullYear(date.getFullYear() - 16);
            var user = {firstname:'Joe', lastname:'Bloggs', dob:date};
            var result = v88.validateInput('dob_yrs', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
            expect(result.errors[0].code).toBe("DATE_ATLEAST");
        });

    });

});