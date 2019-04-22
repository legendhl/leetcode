/**
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 104 ms, faster than 98.92%
 * Memory Usage: 43.6 MB, less than 84.93%
 */
var findDisappearedNumbers = function (nums) {
    let len = nums.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        nums[(nums[i] - 1) % len] += len;
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] <= len) {
            res.push(i + 1);
        }
    }
    return res;
};