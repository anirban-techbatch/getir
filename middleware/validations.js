
/*  
All the Function relatedto validation will be declared here 
*/

const moment = require('moment');
let validations = {
  fieldValidate: function (req, res, next) {
    if ((!moment(req.body.startDate, 'YYYY-MM-DD', true).isValid()) || (!moment(req.body.endDate, 'YYYY-MM-DD', true).isValid())) {
      res.send({
        "code": 2,
        "message": "Invalid Date Format"
      });
    }else if((typeof req.body.minCount !== 'number')||(typeof req.body.maxCount !== 'number')){

      res.send({
        "code": 2,
        "message": "Invalid Number Format"
      });

    }
    
    else {
      next();
    }


  }
};

module.exports = validations;