const internModel = require("../models/internModel.js");

const collegeModel = require("../models/collegeModel.js");

const getCollegeDetail = async function (req, res) {
    try {
      const data = req.query.name;
      if (!data) {
        return res
          .status(400)
          .send({ status: false, msg: "College name is required field" });
      }
    
     
  
      const collegeDetails = await collegeModel.find({name:data});

if (!collegeDetails) {
  return res.status(400).send({status:false,message:"college is not present in the database"})
  
}

const internDetails = await internModel.find({collegeId:collegeDetails[0]._id})

      res
        .status(201)
        .send({
          status: true, collegeDetails, interests: internDetails
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  


module.exports.getCollegeDetail = getCollegeDetail;