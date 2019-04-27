/**
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

Example 1:
Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Note:

The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.
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
 * Runtime: 64 ms, faster than 100.00%
 * Memory Usage: 35.5 MB, less than 100.00%
 */
var sumRootToLeaf = function (root) {
    let sum = 0;
    let num = 0;
    traverse(root);
    return sum;

    function traverse(node) {
        if (!node) return;
        num = (num << 1) + node.val;
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (!node.left && !node.right) sum += num;
        num >>= 1;
    }
};