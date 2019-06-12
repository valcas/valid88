# Valid88 - Client/Server, config based validation framework 

Validate user input on the front and back end using the same configuration files. 

Why - web developers like to put validations into the front-end code that prevent invalid data being sent. This can be a security problem if the back end doesn't have the same checks. Valid88 allows deveopers to create basic validations in a single config file that can be used on the front and back ends. 

this example config contains validations for 3 user input fields - firstname, lastname and dob...

var userJSON = {
	"validationsets":[
		{"name":"userdetails", "fields":[
			{"name":"firstname", "field":"user.firstname", "type":"string", "validations":[
				{"name":"mandatory", "value":true},
				{"name":"regex", "value":{"types":["alpha","latin"]}, "additionalchars":"' "},
				{"name":"maxlength", "length":24}
			]},
			{"name":"lastname", "field":"user.lastname", "type":"string", "validations":[
				{"name":"standardname", "composite":true}
			]},
			{"name":"dob", "field":"user.dob", "type":"date", "validations":[
				{"name":"mandatory", "value":true},
				{"name":"date", "variants":
					[
						{"type":"atleast", "value":18, "datepart":"years"},
						{"type":"atmost", "value":80, "datepart":"years"}
					]
				}
			]}
		]}
	],

	"compositevalidations":[
		{"name": "standardname", "type":"string", "validations":[
			{"name":"mandatory", "value":true},
			{"name":"regex", "value":{"types":["alpha","latin"]}, "additionalchars":"' "},
			{"name":"maxlength", "length":24}

		]}
	]
}

// Create the Valid88 instance
var v88 = new Valid88.Valid88();
// Load the user config. This is usually stored in a separate file.
v88.registerValidationSet(userJSON);

var user = {firstname:'Joe', lastname:'Bloggs', dob:new Date(1989, 11, 23)};
var result = v88.validateInput('userdetails', {user:user});
// results has no errors

var user = {firstname:null, lastname:null, dob:null};
var result = v88.validateInput('userdetails', {user:user});
// results has "status":"fail" and 3 errors
