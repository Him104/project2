const internModel = require("../models/internModel.js");
const validator = require('validator');
const createIntern = async function (req, res) {
    try {
      const data = req.body;
      if (!data.name) {
        return res
          .status(400)
          .send({ status: false, msg: "name is required field" });
      }
      if (!data.email) {
        return res.status(400).send({ status: false, msg: "email is required" });
      }
      const validEmail = validator.isEmail(data.email)
      if (!validEmail) {
        return res.status(400).send({status:false,msg:"email is not valid"})
      }
      if (!data.mobile) {
        return res.status(400).send({ status: false, msg: "mobile is required" });
      }
      if (data.mobile.length>10 || data.mobile.length<10) {
        return res.status(400).send({status: false, msg: "mobile number should be ten digits only"});
      }
    
      if (!data.collegeId) {
        return res.status(400).send({ status: false, msg: "collegeId is required" });
      }
     
  
      const createIntern1 = await internModel.create(data);
      res
        .status(201)
        .send({
          status: true,
          message: "Intern created successfully",
          data: createIntern1,
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  


module.exports.createIntern = createIntern;