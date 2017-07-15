/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;
    let arr = [];
    for (let i=0; i<s.length; i++) {
        let c = s[i];
        if (c === '{' || c === '[' || c === '(') {
            arr.push(s[i]);
        } else {
            let left = arr.pop();
            if (!(c === '}' && left === '{' || c === ']' && left === '[' || c === ')' && left === '(')) {
                return false;
            }
        }
    }
    return arr.length === 0;
};