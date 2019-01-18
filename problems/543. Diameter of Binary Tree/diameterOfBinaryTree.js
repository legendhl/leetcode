/**
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
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
 * Runtime: 84 ms
 * Beats: 44.35%
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    height(root);
    return max;

    function height(root) {
        if (!root) return 0;
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        if (max < leftHeight + rightHeight) {
            max = leftHeight + rightHeight;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
};