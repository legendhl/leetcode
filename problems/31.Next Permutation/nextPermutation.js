// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums || !nums.length || nums.length === 1) return;
    let n = nums.length, p, i, j, k;
    for (p=n-1; p>0 && nums[p]<=nums[p-1]; p--) {
    }

    if (p !== 0) {
        for (k=p; k<n && nums[k]>nums[p-1]; k++) {
        }
        k--;
        let t = nums[p-1];
        nums[p-1] = nums[k];
        nums[k] = t;
        i = p;
        j = n-1;
    } else {
        i = 0;
        j = n-1;
    }
    for (; i<j; i++, j--) {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
};