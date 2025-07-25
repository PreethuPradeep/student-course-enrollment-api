const { body } = require('express-validator');

exports.validateEnrollment = [
  body('student_id').notEmpty().withMessage('student_id is required').isMongoId().withMessage('Invalid student_id'),
  body('course_id').notEmpty().withMessage('course_id is required').isMongoId().withMessage('Invalid course_id')
];
