/**
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:
Input: "Hello, my name is John"
Output: 5
 */
/**
 * @param {string} s
 * @return {number}
 * Runtime: 52 ms, faster than 98.44%
 * Memory Usage: 33.9 MB, less than 18.93%
 */
var countSegments = function (s) {
    let isSegment = false;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ' || char === '\t' || char === '\r' || char === '\n') {
            isSegment = false;
        } else {
            if (!isSegment) {
                count++;
            }
            isSegment = true;
        }
    }
    return count;
};