import { body } from "express-validator";

const newMessageValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required.")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters."),
  body("messageText").trim().notEmpty().withMessage("Message cannot be empty."),
];

export default newMessageValidation;
