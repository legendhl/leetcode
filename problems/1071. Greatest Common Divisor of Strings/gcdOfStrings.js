/**
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

Note:

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] and str2[i] are English uppercase letters.
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * Runtime: 60 ms, faster than 45.11%
 * Memory Usage: 35.1 MB, less than 100.00%
 */
var gcdOfStrings = function (str1, str2) {
    let long;
    let short;
    if (str1.length > str2.length) {
        long = str1;
        short = str2;
    } else {
        long = str2;
        short = str1;
    }
    let longLen = long.length;
    let shortLen = short.length;
    for (let i = shortLen; i >= 1; i--) {
        if (longLen % i === 0 && shortLen % i === 0) {
            let prefix = short.slice(0, i);
            if (long === prefix.repeat(longLen / i) && short === prefix.repeat(shortLen / i)) {
                return prefix;
            }
        }
    }
    return '';
};