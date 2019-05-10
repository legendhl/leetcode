/**
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 60 ms, faster than 100.00%
 * Memory Usage: 37.4 MB, less than 62.50%
 */
var findErrorNums = function (nums) {
    let res = new Array(2);
    let n = nums.length;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        let index = nums[i] - 1;
        if (arr[index]) {
            res[0] = nums[i];
        }
        arr[index] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        if (!arr[i]) {
            res[1] = i + 1;
        }
    }
    return res;
};