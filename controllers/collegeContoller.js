const collegeModel = require("../models/collegeModel.js");

const createCollege = async function (req, res) {
    try {

      const queryParams = req.query;
      const data = req.body;

      if (!queryParams) {
return res.status(400).send(400).send({status:false, msg: "fill data in query params"});        
      }
      if (!data.name) {
        return res
          .status(400)
          .send({ status: false, msg: "name is required field" });
      }
      if (!data.fullName) {
        return res.status(400).send({ status: false, msg: "fullName is required" });
      }
      if (!data.logoLink) {
        return res.status(400).send({ status: false, msg: "logoLink is required" });
      }
     
  
      const createCollege = await collegeModel.create(data);
      res
        .status(201)
        .send({
          status: true,
          message: "College created successfully",
          data: createCollege,
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  


module.exports.createCollege = createCollege;