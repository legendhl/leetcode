/**
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 * Runtime: 68 ms, faster than 24.14%
 * Memory Usage: 14.6 MB, less than 4.98%
 */
var toLowerCase = function (str) {
    let lowerCaseStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let code = str.charCodeAt(i);
        let ch = code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : char;
        lowerCaseStr += ch;
    }
    return lowerCaseStr;
};