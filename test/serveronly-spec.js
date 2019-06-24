var userJSON;

describe("Valid88 Locale Tests", function() {
    
    beforeEach(function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", '../../spec/testfiles/user-details-server.json', false );
        xmlHttp.send( null );
        userJSON = JSON.parse(xmlHttp.responseText);

    });

    describe('When there\'s a escapeHTML validation configured on the server', function()    {
       
        it("client config removes server elements", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);
            var clientConfig = v88.getClientOnlyValidations();

            expect(clientConfig.validationsets[0].fields[0].validationsServer).toEqual(undefined);
        });

        it("fails on different", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var user = {profile:'this is the profile with a <script>alert(0)</script> tag'};
            var result = v88.validateInput('userdetails', {user:user});
            expect(result.errors.length).toBe(1);
            expect(result.status).toBe('fail');      
            expect(result.errors[0].code).toBe("ESC_HTML_DEFAULT");
        });

        it("passes on different", function() {
            var v88 = new Valid88.Valid88();
            v88.registerValidationSet(userJSON);

            var profile = 'this is the profile with a <script>alert(0)</script> tag';
            var user = {profile:profile};
            var result = v88.validateInput('userdetailsReplace', {user:user});
            expect(result.errors.length).toBe(0);
            var validator = v88.register.validators["escapeHTML"];
            expect(user.profile).toBe(validator.escape(profile));
        });

    });

});