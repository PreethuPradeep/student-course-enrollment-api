const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    CreatedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model("Student",studentSchema);