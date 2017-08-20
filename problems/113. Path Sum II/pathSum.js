// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 * Runtime: 148 ms
 * Beats: 78.57%
 */
var pathSum = function(root, sum) {
    let res = [];
    if (!root)  {
        return res;
    }
    dfs(root, [], 0);
    return res;
    
    function dfs(root, path, cur) {
        cur += root.val;
        path.push(root.val);
        if (!root.left && !root.right && cur === sum) {
            res.push(Array.from(path));
            path.pop();
            return;
        }
        if (root.left) {
            dfs(root.left, path, cur);
        }
        if (root.right) {
            dfs(root.right, path, cur)
        }
        path.pop();
    }
};
