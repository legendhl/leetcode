/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let charsHash = {};
  let count = 0;
  for (let ch of chars) {
    charsHash[ch] = charsHash[ch] ? charsHash[ch] + 1 : 1;
  }
  for (let word of words) {
    let wordHash = {};
    for (let ch of word) {
      wordHash[ch] = wordHash[ch] ? wordHash[ch] + 1 : 1;
    }
    let canSpell = true;
    for (let key in wordHash) {
      if (!charsHash[key] || charsHash[key] < wordHash[key]) {
        canSpell = false;
        break;
      }
    }
    if (canSpell) {
      count += word.length;
    }
  }
  return count;
};