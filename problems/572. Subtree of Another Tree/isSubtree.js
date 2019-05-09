/**
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * Runtime: 72 ms, faster than 100.00%
 * Memory Usage: 39.5 MB, less than 9.52%
 */
var isSubtree = function (s, t) {
    return isSameTree(s, t) || (s !== null && isSubtree(s.left, t)) || (s !== null && isSubtree(s.right, t));
    function isSameTree(s, t) {
        if (s === null && t === null) return true;
        if (s === null || t === null) return false;
        return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }
};