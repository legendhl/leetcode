// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 145 ms
 * Beats: 46.84%
 */
var removeDuplicates = function(nums) {
    let len = nums.length, idx = 0;
    if (len <= 2) return len;
    for (let i=0; i<len; ) {
        let cur = nums[i];
        if (i+1 < len && cur === nums[i+1]) {
            nums[idx++] = nums[i++];
            nums[idx++] = nums[i++];
            while (i<len && nums[i] === cur) {
                i++;
            }
        } else {
            nums[idx++] = nums[i++];
        }
    }
    return idx;
};
