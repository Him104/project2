const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const internsSchema = new mongoose.Schema({

    name: {type: String,required: true,trim: true},
    email: {type: String,required: true,trim: true,uniqe: true,lowercase: true},
    mobile: {type: Number,required: true,trim: true,unique: true},
    collegeId: {type: ObjectId,ref: "collegeModel",required: true},
    isDeleted: {type:Boolean,default:false},

    }
    , { timestamps: true });
    
    module.exports = mongoose.model('interns', internsSchema); 