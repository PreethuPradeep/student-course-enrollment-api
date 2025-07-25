const express=require("express");
const router=express.Router();
const stdtCtrl=require("../controllers/studentControllers");
const {validateStudent}=require("../validators/studentValidators");
const {runValidation}=require("../validators/validate");


router.post('/',validateStudent,runValidation,stdtCtrl.addStudent);
router.get('/',stdtCtrl.getAllStudents);
router.get('/:id',stdtCtrl.getStudent);
router.put('/:id',validateStudent,runValidation,stdtCtrl.updateStudent);
router.delete('/:id',stdtCtrl.deleteStudent);

module.exports= router;
