const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    console.log(data.name);
    errors.name = "name needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.name)) {
    console.log(data.name);
    errors.name = "Event name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
