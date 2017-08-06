// Given a binary tree, return the preorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [1,2,3].

// Note: Recursive solution is trivial, could you do it iteratively?

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
 * Runtime: 126 ms
 * Beats: 25.55%
 */
var preorderTraversal = function(root) {
    let res = [], stack = [root], cur;
    while (stack.length !== 0) {
        cur = stack.pop();
        if (cur) {
            res.push(cur.val);
            if (cur.right) {
                stack.push(cur.right);
            }
            if (cur.left) {
                stack.push(cur.left);
            }
        }
    }
    return res;
};
