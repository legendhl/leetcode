/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0, j = nums.length-1, p = 0;
    while(i <= j) {
        p = Math.floor((i+j)/2);
        if (nums[p] < target) {
            i = p + 1;
        } else {
            j = p - 1;
        }
    }
    return nums[p] < target ? p+1 : p;
};