/**
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

Note: There are at least two nodes in this BST.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Runtime: 76 ms, faster than 96.27%
 * Memory Usage: 38.5 MB, less than 36.36%
 */
var getMinimumDifference = function (root) {
    let arr = [];
    traverse(root);
    let min = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1]);
    }
    return min;

    function traverse(node) {
        if (!node) return;
        if (node.left) traverse(node.left);
        arr.push(node.val);
        if (node.right) traverse(node.right);
    }
};