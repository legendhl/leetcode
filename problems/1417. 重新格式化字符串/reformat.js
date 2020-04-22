/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let letters = [], numbers = [];
  for (let ch of s) {
    if (ch >= 'a' && ch <= 'z') {
      letters.push(ch);
    } else {
      numbers.push(ch);
    }
  }
  let lLen = letters.length, nLen = numbers.length, rs = '';
  if (Math.abs(lLen - nLen) > 1) return '';
  for (let i = 0; i < lLen && i < nLen; i++) {
    rs += letters[i];
    rs += numbers[i];
  }
  if (lLen > nLen) {
    rs += letters[lLen - 1];
  } else if (nLen > lLen) {
    rs = numbers[nLen - 1] + rs;
  }
  return rs;
};