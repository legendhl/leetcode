/**
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

 
Follow up:
Could you solve it using only O(1) extra space?

Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:

Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.

Example 3:

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.

Note:

All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.
 */
/**
 * @param {character[]} chars
 * @return {number}
 * Runtime: 60 ms, faster than 99.46%
 * Memory Usage: 37.9 MB, less than 5.03%
 */
var compress = function (chars) {
    let len = chars.length;
    let last = chars[0];
    let curLen = 0;
    let res = 0;
    let index = 0;
    for (let i = 0; i < len; i++) {
        let ch = chars[i];
        if (i === len - 1) {
            if (ch !== last) {
                res += curLen === 1 ? 1 : 1 + (curLen + '').length;
                index = _compress(chars, index, last, curLen);
                res += 1;
                index = _compress(chars, index, ch, 1);
            } else {
                res += 1 + ((curLen + 1) + '').length;
                index = _compress(chars, index, last, curLen + 1);
            }
        } else if (ch !== last) {
            res += curLen === 1 ? 1 : 1 + (curLen + '').length;
            index = _compress(chars, index, last, curLen);
            last = ch;
            curLen = 1;
        } else {
            curLen++;
        }
    }
    return res;

    function _compress(chars, index, char, len) {
        chars[index++] = char;
        if (len > 1) {
            let lenStr = len + '';
            for (let i = 0; i < lenStr.length; i++) {
                chars[index++] = lenStr[i];
            }
        }
        return index;
    }
};