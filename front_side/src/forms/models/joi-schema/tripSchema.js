import Joi from "joi";

const tripSchema = {
  title: Joi.string()
    .required()
    .label("Title"),
  description: Joi.string()
    .required()
    .label("Description"),
  country: Joi.string()
    .required()
    .label("Country"),
  continent: Joi.string()
    .required()
    .label("Continent"),
  imageUrl: Joi.string()
    .uri()
    .required()
    .label("Image URL"),
  imageAlt: Joi.string()
    .required()
    .label("Image ALT")
};

export default tripSchema;