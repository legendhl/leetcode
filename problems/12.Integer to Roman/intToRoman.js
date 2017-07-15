/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arr = [['I','V','X'],['X','L','C'],['C','D','M'],['M']];
    let s = (num + '').split('').reverse().join('');
    let roman = '';
    for (let i=0; i<s.length; i++) {
        let m = +s[i];
        if (m % 5 === 4) {
            roman = arr[i][0] + (m > 5 ? arr[i][2] : arr[i][1]) + roman;
        } else {
            roman = (m >= 5 ? arr[i][1] : '') + arr[i][0].repeat(m%5) + roman;
        }
    }
    return roman;
};