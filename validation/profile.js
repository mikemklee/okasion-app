const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    console.log(data.handle);
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    console.log(data.handle);
    errors.handle = "Profile handle is required";
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
