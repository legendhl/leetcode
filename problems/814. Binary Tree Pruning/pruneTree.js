/**
We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]
 
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]

Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

Note:

The binary tree will have at most 100 nodes.
The value of each node will only be 0 or 1.
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
 * @return {TreeNode}
 * Runtime: 52 ms, faster than 89.90%
 * Memory Usage: 33.7 MB, less than 83.45%
 */
var pruneTree = function (root) {
    return dfs(root) ? null : root;

    function dfs(root) {
        let leftRemove = true;
        let rightRemove = true;
        if (root.left) {
            leftRemove = dfs(root.left) && root.left.val === 0;
            if (leftRemove) {
                root.left = null;
            }
        }
        if (root.right) {
            rightRemove = dfs(root.right) && root.right.val === 0;
            if (rightRemove) {
                root.right = null;
            }
        }
        return leftRemove && rightRemove;
    }
};