/**
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"
Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * Runtime: 84 ms, faster than 37.04%
 * Memory Usage: 38 MB, less than 100.00%
 */
var nextGreatestLetter = function (letters, target) {
    let lowerCases = Array(26);
    let targetCode = target.charCodeAt(0);
    for (let c of letters) {
        let code = c.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            lowerCases[code - 97] = true;
        }
    }
    let first = null;
    for (let i = 0; i < lowerCases.length; i++) {
        if (lowerCases[i]) {
            if (!first) {
                first = String.fromCharCode(97 + i);
            }
            if (97 + i > targetCode) {
                return String.fromCharCode(97 + i);
            }
        }
    }
    return first;
};