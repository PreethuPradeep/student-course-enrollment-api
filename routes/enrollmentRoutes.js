const express=require("express");
const router=express.Router();
const enrlCtrl=require("../controllers/enrollmentControllers");
const {validateEnrollment}=require("../validators/enrollmentValidators");
const {runValidation}=require("../validators/validate");


router.post('/',validateEnrollment,runValidation,enrlCtrl.enrollStudentInCourse);
router.get('/courses/:id/students', enrlCtrl.getStudentsByCourseId);
router.get('/students/:id/courses', enrlCtrl.getCoursesByStudentId);

module.exports = router;