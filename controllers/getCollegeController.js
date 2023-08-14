const internModel = require("../models/internModel.js");

const getCollegeDetail = async function (req, res) {
    try {
      const data = req.body;
      if (!data.collegeId) {
        return res
          .status(400)
          .send({ status: false, msg: "CollegeId is required field" });
      }
    
     
  
      const getDetail = await internModel.find({collegeId:data.collegeId});
      res
        .status(201)
        .send({
          status: true,
          message: "Intern details successfully find",
          data: getDetail
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  


module.exports.getCollegeDetail = getCollegeDetail;