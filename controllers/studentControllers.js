const Students=require("../models/students");


// GET all students list
exports.getAllStudents = async (req, res) => {
  const students = await Students.find();
  res.json(students);
};
//get student by id
exports.getStudent=async(req,res)=>{
    const student=await Students.findById(req.params.id);
    res.json(student);
}
// POST create an item
exports.addStudent = async (req, res) => {
  const student = new Students(req.body);
  await student.save();
  res.status(201).json(student);
};

// PUT update item
exports.updateStudent = async (req, res) => {
  const student = await Students.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

// DELETE item
exports.deleteStudent = async (req, res) => {
  await Students.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student removed' });
};
