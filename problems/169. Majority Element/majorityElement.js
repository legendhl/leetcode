/**
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Time Limit Exceeded
 */
var majorityElement = function (nums) {
    return _majorityElement(nums, 0, nums.length - 1);

    function _majorityElement(nums, begin, end) {
        if (begin === end) {
            return nums[begin];
        }
        if (begin > end) {
            return null;
        }
        let center = Math.floor((end - begin) / 2) + begin;
        let leftMajority = _majorityElement(nums, 0, center);
        let RightMajority = _majorityElement(nums, center + 1, end);
        if (leftMajority === RightMajority) {
            return leftMajority;
        } else {
            let cntLeft = 0;
            let cntRight = 0;
            let len = end - begin + 1;
            for (let i = begin; i <= end; i++) {
                if (leftMajority === nums[i]) {
                    cntLeft++;
                } else if (RightMajority === nums[i]) {
                    cntRight++;
                }
            }
            if (cntLeft >= len / 2) {
                return leftMajority;
            } else if (cntRight >= len / 2) {
                return RightMajority;
            }
            return null;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 56 ms
 * Beats: 100.00%
 */
var majorityElement = function (nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (major === nums[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            major = nums[i];
            count = 1;
        }
    }
    // assume that the majority element always exist 
    // count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (major === nums[i]) {
    //         count++;
    //     }
    // }
    return major;
}