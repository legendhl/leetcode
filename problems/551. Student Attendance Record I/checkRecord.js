/**
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
 */
/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 72 ms
 * Beats: 50.00%
 */
var checkRecord = function (s) {
    let lateCount = 0;
    let absentCount = 0;
    for (let ch of s) {
        if (ch === 'A') {
            absentCount++;
            lateCount = 0;
            if (absentCount > 1) {
                return false;
            }
        } else if (ch === 'L') {
            lateCount++;
            if (lateCount > 2) {
                return false;
            }
        } else {
            lateCount = 0;
        }
    }
    return true;
};