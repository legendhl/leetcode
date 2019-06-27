/**
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note: 
1 <= preorder.length <= 100
The values of preorder are distinct.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 * Runtime: 72 ms, faster than 22.13%
 * Memory Usage: 34.1 MB, less than 72.86%
 */
var bstFromPreorder = function (preorder) {
    return buildTree(0, preorder.length - 1);

    function buildTree(begin, end) {
        if (begin > end) {
            return null;
        } else if (begin === end) {
            return new TreeNode(preorder[begin]);
        } else {
            let root = new TreeNode(preorder[begin]);
            let pivot = begin + 1;
            while (preorder[pivot] < preorder[begin] && pivot <= end) {
                pivot++;
            }
            root.left = buildTree(begin + 1, pivot - 1);
            root.right = buildTree(pivot, end);
            return root;
        }
    }
};