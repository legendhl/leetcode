// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Runtime: 152 ms
 * Beats: 37.37%
 */
var isValidBST = function(root) {
    if (!root) return true;
    let arr = [];
    lookup(root);
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] >= arr[i+1]) return false;
    }
    return true;
    
    function lookup(root) {
        if (!root) return;
        lookup(root.left);
        arr.push(root.val);
        lookup(root.right);
    }
};
