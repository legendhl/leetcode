/**
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 148 ms, faster than 2.99%
 * Memory Usage: 21.8 MB, less than 50.00%
 */
var findShortestSubArray = function (nums) {
    let len = nums.length;
    let hash = {};
    hash[nums[0]] = 1;
    let maxNums = [nums[0]];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        hash[num] = hash[num] ? hash[num] + 1 : 1;
        if (hash[num] > count) {
            count = hash[num];
            maxNums = [num];
        } else if (hash[num] === count) {
            maxNums.push(num);
        }
    }
    let minLen = len;
    for (let maxNum of maxNums) {
        let lIndex = nums.indexOf(maxNum);
        let rIndex = nums.lastIndexOf(maxNum);
        let length = rIndex - lIndex + 1;
        if (length < minLen) {
            minLen = length;
        }
    }
    return minLen;
};