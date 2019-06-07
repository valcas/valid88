// const CsvLukup = require('../build/csv-lukup.js').default;
const Valid88 = require('../dist/Valid88').default;
// const BaseValidator = require('../lib/validators/BaseValidator');
const fs = require('fs');

describe("A suite", function() {
    it("contains spec with an expectation", function() {

      var userJSON = JSON.parse((fs.readFileSync('./spec/testfiles/user-details.json','utf-8')));

      var V88 = new Valid88();
      V88.registerValidationSet(userJSON);
      
      var user = {firstname:'Joe', lastname:'Bloggs', dob:new Date(1999, 11, 23)};
      V88.validateInput('userdetails', {user:user});
    
      // var content;
      // var data = String(fs.readFileSync('./spec/testfiles/beatles.csv','utf-8'));

      // var lukup = new CsvLukup({delimiter:',', headerRow:0, dataRow:1, trailerRows:0});
      // lukup.readcsv(data);

      // var colnames = lukup.getColnames();
      // console.log(colnames);

      // while (lukup.next())  {
      //   var row = ''
      //   colnames.map(col => {
      //     row += lukup.getValue(col) + ':';
      //   });
      //   console.log(row.substring(0, row.length - 1));
      // }

      // console.log('done');

      expect(true).toBe(true);

    });
});