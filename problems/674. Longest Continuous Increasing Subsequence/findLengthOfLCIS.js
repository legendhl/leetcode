/**
Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
Note: Length of the array will not exceed 10,000.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 72 ms
 * Beats: 100%
 */
var findLengthOfLCIS = function (nums) {
    let len = nums.length;
    if (!len) return len;
    let longest = 1;
    let cur = 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++;
            if (cur > longest) {
                longest = cur;
            }
        } else {
            cur = 1;
        }
    }
    return longest;
};