/**
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 100.00%
 * Memory Usage: 37 MB, less than 54.54%
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (++cur > max) {
                max = cur;
            }
        } else {
            cur = 0;
        }
    }
    return max;
};