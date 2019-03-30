/**
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

Example 1:
Input: [1,1,1,1,1,null,1]
Output: true

Example 2:
Input: [2,2,2,5,2]
Output: false

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
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
 * @return {boolean}
 * Runtime: 56 ms, faster than 100.00%
 * Memory Usage: 34 MB, less than 22.00%
 */
var isUnivalTree = function (root) {
    if (!root) return true;
    let val = root.val;
    return traverse(root, val);

    function traverse(root, val) {
        if (root.val !== val) return false;
        let left = true;
        let right = true;
        if (root.left) {
            left = traverse(root.left, val);
            if (!left) return left;
        }
        if (root.right) {
            right = traverse(root.right, val);
            if (!right) return right;
        }
        return true;
    }
};