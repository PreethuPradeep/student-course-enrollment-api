const {body}=require("express-validator");
exports.validateStudent=[
    body("Name").notEmpty().withMessage("Student name is required").isLength({ min: 4 }).withMessage("must be atleast 4 letters long"),
    body("Email").isEmail().withMessage("must be email format").notEmpty().withMessage("email is required"),
];