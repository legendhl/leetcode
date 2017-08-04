// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * Runtime: 125 ms
 * Beats: 44.22%
 */
var sortedArrayToBST = function(nums) {
    return toBST(0, nums.length-1);

    function toBST(i, j) {
        if (i > j) {
            return null;
        }
        let mid = Math.floor((i+j)/2), node = new TreeNode(nums[mid]);
        if (i <= mid-1) {
            node.left = toBST(i, mid-1);
        }
        if (mid+1 <= j) {
            node.right = toBST(mid+1, j);
        }
        return node;
    }
};
