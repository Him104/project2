const mongoose = require("mongoose");

const internsSchema = new mongoose.Schema({

    name: {type: String,required: true,trim: true},
    email: {type: String,required: true,trim: true,uniqe: true},
    mobile: {type: String,required: true,trim: true,unique: true},
    collegeId: {type: String,required: true,trim: true},
    isDeleted: {type:Boolean,default:false},

    }
    , { timestamps: true });
    
    module.exports = mongoose.model('interns', internsSchema); 