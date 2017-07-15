/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = [[],
        [], ['a', 'b', 'c'], ['d', 'e', 'f'],
        ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']],
        arr = [];
    function letter (digits, str) {
        if (digits[0]) {
            let n = +digits[0], d = digits.slice(1);
            if (!map[n].length) {
                letter(d, str);
            }
            for (let i=0; i<map[n].length; i++) {
                letter(d, str+map[n][i]);
            }
        } else if (str) {
            arr.push(str);
        }
    }
    letter(digits, '', arr);
    return arr;
};