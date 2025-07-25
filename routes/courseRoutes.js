const express=require("express");
const router=express.Router();
const crsCtrl=require("../controllers/courseController");
const {validateCourse}=require("../validators/courseValidators");
const {runValidation}=require("../validators/validate");

router.post('/',validateCourse,runValidation,crsCtrl.addCourse);
router.get('/',crsCtrl.getAllCourses);
router.get('/:id',crsCtrl.getCourse);
router.put('/:id',validateCourse,runValidation,crsCtrl.updateCourse);
router.delete('/:id',crsCtrl.deleteCourse);


module.exports=router;
