/**
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 84 ms, faster than 24.81%
 * Memory Usage: 36.5 MB, less than 16.13%
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let hash = {};
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        let size = stack.length;
        if (size === 0) {
            stack.push(num);
        } else {
            while (size > 0 && stack[size - 1] < num) {
                let key = stack.pop();
                hash[key] = num;
                size--;
            }
            stack.push(num);
        }
    }
    while (stack.length > 0) {
        hash[stack.pop()] = -1;
    }
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        res.push(hash[num]);
    }
    return res;
};