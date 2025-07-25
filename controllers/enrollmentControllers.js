const Enrollment = require('../models/Enrollment');
const Student = require('../models/students');
const Course = require('../models/courses');

// POST /enrollments - Enroll a student in a course
exports.enrollStudentInCourse = async (req, res) => {
    const { student_id, course_id } = req.body;
    const student = await Student.findById(student_id);
    const course = await Course.findById(course_id);

    if (!student || !course) {
    return res.status(404).json({ message: 'Student or course not found' });
    };
    // Prevent duplicate enrollment
    const alreadyEnrolled = await Enrollment.findOne({
      student: student_id,
      course: course_id
    });
    if (alreadyEnrolled) {
      return res.status(400).json({ message: 'Student already enrolled in this course' });
    };
    const enrollment = new Enrollment({
      student: student_id,
      course: course_id
    });
    await enrollment.save();
    res.status(201).json(enrollment);
};

// GET /courses/:id/students - List all students in a course
exports.getStudentsByCourseId = async (req, res) => {
    const enrollments = await Enrollment.find({ course: req.params.id }).populate('student');
    const students = enrollments.map((en) => en.student);
    res.json(students);
};

// GET /students/:id/courses - List all courses a student is enrolled in
exports.getCoursesByStudentId = async (req, res) => {
    const enrollments = await Enrollment.find({ student: req.params.id }).populate('course');
    const courses = enrollments.map((en) => en.course);
    res.json(courses);
};
