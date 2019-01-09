/**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */
/**
 * @param {string} s
 * @return {number}
 * Runtime: 68 ms
 * Beats: 97.78%
 */
var firstUniqChar = function (s) {
    let len = s.length;
    let arr = new Array(26);
    for (let i = 0; i < len; i++) {
        let idx = s.charCodeAt(i) - 97;
        if (arr[idx] === undefined) {
            arr[idx] = i;
        } else {
            arr[idx] = -1;
        }
    }
    let min = len;
    for (let i = 0; i < 26; i++) {
        if (arr[i] !== -1 && arr[i] !== undefined && arr[i] < min) {
            min = arr[i];
        }
    }
    return min === len ? -1 : min;
};