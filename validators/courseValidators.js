const {body}=require("express-validator");
exports.validateCourse=[
    body("Title").notEmpty().withMessage("Course name is required").isLength({ min: 2 }).withMessage("course name must be atleast 2 characters"),
    body("Description").notEmpty().withMessage("Description is required").isLength({min:10}).withMessage("Minimum 10 characters"),
];
