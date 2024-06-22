import Joi from "joi";

const SignUpSchema = {
  FirstName: Joi.string()
    .required()
    .label('First Name')
    .messages({
        "string.empty": "Please enter a valid First Name",
        "any.required": "First name is required",
    }),
  LastName: Joi.string()
    .required()
    .label('Last Name')
    .messages({
        "string.empty": "Please enter a valid Last Name",
        "any.required": "Last name is required",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{}|;:,.<>?]).{8,20}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "The password must be 8-20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      "any.required": "Password is required",
    }),
}
export default SignUpSchema;