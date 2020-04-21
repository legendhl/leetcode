/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let dateNums = date.split('-');
  let year = +dateNums[0], month = +dateNums[1], day = +dateNums[2];
  // let days = [31,28,31,30,31,30,31,31,30,31,30,31];
  let days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let dayOfYear = days[month - 1] + day;
  if (((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) && month > 2) {
    dayOfYear += 1;
  }
  return dayOfYear;
};