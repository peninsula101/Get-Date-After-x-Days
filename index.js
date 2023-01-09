const addDays = require("date-fns/addDays");

function getDate(days) {
  const result = addDays(new Date(2020, 7, 22), days);
  const date = `${result.getDate()}-${
    result.getMonth() + 1
  }-${result.getFullYear()}`;
  return date;
}

module.exports = getDate;
