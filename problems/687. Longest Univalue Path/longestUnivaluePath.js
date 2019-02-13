/**
Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output:

2
Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output:

2
Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
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
 * Runtime: 216 ms, faster than 23.08%
 * Memory Usage: 52 MB, less than 0.00%
 */
var longestUnivaluePath = function (root) {
    let longest = 0;
    _longestUnivaluePath(root);
    return longest;

    function _longestUnivaluePath(root) {
        if (!root) return 0;
        let len = 0;
        let leftLen = _longestUnivaluePath(root.left);
        let rightLen = _longestUnivaluePath(root.right);
        let hasLeft = root.left && root.left.val === root.val;
        let hasRight = root.right && root.right.val === root.val;
        if (hasLeft) {
            len += leftLen + 1;
        }
        if (hasRight) {
            len += rightLen + 1;
        }
        if (len > longest) {
            longest = len;
        }
        return Math.max(hasLeft ? leftLen + 1 : 0, hasRight ? rightLen + 1 : 0);;
    }
};