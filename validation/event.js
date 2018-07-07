const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.topic = !isEmpty(data.topic) ? data.topic : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  // Validate title
  if (
    !Validator.isLength(data.title, {
      min: 2,
      max: 40
    })
  ) {
    console.log(data.title);
    errors.title = "Title needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.title)) {
    console.log(data.title);
    errors.title = "Event title is required";
  }

  // Validate topic
  if (Validator.isEmpty(data.topic)) {
    console.log(data.topic);
    errors.topic = "Event topic is required";
  }

  // Validate description
  if (
    !Validator.isLength(data.description, {
      min: 2,
      max: 200
    })
  ) {
    console.log(data.description);
    errors.description = "Description needs to be between 2 and 200 characters";
  }

  if (Validator.isEmpty(data.description)) {
    console.log(data.description);
    errors.description = "Event description is required";
  }

  // Validate address
  if (Validator.isEmpty(data.address)) {
    console.log(data.address);
    errors.address = "Event address is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
