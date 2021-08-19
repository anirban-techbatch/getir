/*  
All the routes needed for records module will be specified here
*/


const express = require('express');
const router = express.Router();
const recordRepo=require('../repository/recordRepo.js');
const validator = require('../middleware/validations');
router.post('/',validator.fieldValidate,async(req,res)=>{

  try {
       let result=await recordRepo.getRecords(req.body.startDate,req.body.endDate,req.body.minCount,req.body.maxCount); 
       res.send({
         code:0,
         msg:"Success",
         records:result
       });

  }catch(err) {

    response.code=3;
    response.msg="Internal Server Error";

  }
    
    });


    module.exports=router;
    