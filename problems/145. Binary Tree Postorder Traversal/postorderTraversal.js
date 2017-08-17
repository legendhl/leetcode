// Given a binary tree, return the postorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3,4},
//    1
//     \
//      2
//     / \
//    3   4
// return [4,3,2,1].

// Note: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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
 * @return {number[]}
 * Runtime: 132 ms
 * Beats: 11.21%
 */
var postorderTraversal = function(root) {
    let stack = [root], prev = null, p = root, res = [];
    if (!root) {
        return res;
    }
    while (stack.length > 0) {
        p = stack.pop();
        if (p.left === null && p.right === null || prev !==null && (p.left === prev || p.right === prev)) {
            res.push(p.val);
            prev = p;
        } else {
            stack.push(p);
            if (p.right) {
                stack.push(p.right);
            }
            if (p.left) {
                stack.push(p.left);
            }
        }
    }
    return res;
};
