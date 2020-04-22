/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0, cows = 0, len = secret.length;
  let hash = {}, arr = [];
  for (let i = 0; i < len; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      let val = hash[secret[i]];
      hash[secret[i]] = val ? val + 1 : 1;
      arr.push(guess[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (hash[val]) {
      cows++;
      hash[val]--;
    }
  }
  return `${bulls}A${cows}B`;
};