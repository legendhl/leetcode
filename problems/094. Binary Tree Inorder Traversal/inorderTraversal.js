// Given a binary tree, return the inorder traversal of its nodes' values.
//
// For example:
// Given binary tree [1,null,2,3],
//  1
//   \
//   2
//  /
// 3
// return [1,3,2].
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Runtime: 109 ms
 * Beats: 79.70%
 */
var inorderTraversal = function(root) {
    let stack = [], res = [], p = root;
    while (p || stack.length) {
        if (p && p.left) {
            stack.push(p);
            p = p.left;
        } else {
            if (!p) p = stack.pop();
            res.push(p.val);
            p = p.right;
        }
    }
    return res;
};
