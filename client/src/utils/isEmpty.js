/**
 * takes a value and checks whether it is "falsy"
 * @function isEmpty
 * @param {any} value
 * @returns {boolean}
 */

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export default isEmpty;
