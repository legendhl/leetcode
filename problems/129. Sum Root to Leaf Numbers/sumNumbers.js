// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// For example,

//     1
//    / \
//   2   3
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.

// Return the sum = 12 + 13 = 25.

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
 * Runtime: 129 ms
 * Beats: 22.81%
 */
var sumNumbers = function(root) {
    let sum = 0;
    dfs(root);
    return sum;
    
    function dfs(root, path = []) {
        if (!root) return;
        path.push(root.val);
        if (root.left) {
            dfs(root.left, path);
        }
        if (root.right) {
            dfs(root.right, path);
        }
        if (!root.left && !root.right) {
            for (let i=path.length-1, base=1; i>=0; i--,base*=10) {
                sum += path[i]*base;
            }
        }
        path.pop();
    }
};
