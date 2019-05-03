/**
We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Note: The length of the input array will not exceed 20,000.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 156 ms, faster than 44.79%
 * Memory Usage: 51.7 MB, less than 20.00%
 */
var findLHS = function (nums) {
    let countMap = {};
    for (let num of nums) {
        countMap[num] = countMap[num] ? countMap[num] + 1 : 1;
    }
    let longest = 0;
    for (let [key, value] of Object.entries(countMap)) {
        let cur = value + (countMap[+key + 1] || 0);
        if (cur > value && longest < cur) {
            longest = cur;
        }
    }
    return longest;
};