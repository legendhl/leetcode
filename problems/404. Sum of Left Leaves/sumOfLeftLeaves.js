/**
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
 * Runtime: 60 ms, faster than 99.75%
 * Memory Usage: 34.3 MB, less than 24.24%
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    traverse(root);
    return sum;

    function traverse(node) {
        if (!node) return;
        if (node.left) {
            let left = node.left;
            if (!left.left && !left.right) {
                sum += left.val;
            } else {
                traverse(left);
            }
        }
        if (node.right) traverse(node.right);
    }
};