/**
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:
Input: [1,2,3,4]
Output: "23:41"

Example 2:
Input: [5,5,5,5]
Output: ""

Note:

A.length == 4
0 <= A[i] <= 9
 */
/**
 * @param {number[]} A
 * @return {string}
 * Runtime: 56 ms, faster than 91.84%
 * Memory Usage: 35.9 MB, less than 11.87%
 */
var largestTimeFromDigits = function (A) {
    let len = A.length;
    let curHour = -1;
    let curMinute = -1;
    let res = '';
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) {
                continue;
            }
            let hour = A[i] * 10 + A[j];
            if (hour < 24 && hour >= curHour) {
                let minutes = A.filter((val, index) => index !== i && index !== j)
                    .map((val, index, arr) => val * 10 + arr[1 - index])
                    .filter(val => val < 60).sort((a, b) => b - a);
                let minute = minutes.length > 0 ? minutes[0] : -1;
                if ((hour > curHour && minute >= 0) || (hour === curHour && minute > curMinute)) {
                    res = `${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}`;
                    curHour = hour;
                    curMinute = minute;
                }
            }
        }
    }
    return res;
};