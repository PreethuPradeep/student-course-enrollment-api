const courses = require("../models/courses");
const Courses=require("../models/courses");

//get all courses
exports.getAllCourses=async(req,res)=>{
    const courses=await Courses.find();
    res.send(courses);
};
//get one course by id
exports.getCourse=async(req,res)=>{
    const course=await Courses.findById(req.params.id);
    res.send(course);
};
//add course
exports.addCourse=async(req,res)=>{
    const course=new Courses(req.body);
    await course.save();
    res.status(201).json(course);
};
//update a course
exports.updateCourse=async(req,res)=>{
    const course=await Courses.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(course);
};
//delete a course
exports.deleteCourse=async(req,res)=>{
    await Courses.findByIdAndDelete(req.params.id);
    res.json({message:"Course deleted"});
};
