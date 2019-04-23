/**
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True

Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 28
Output: False
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
 * @param {number} k
 * @return {boolean}
 * Runtime: 96 ms, faster than 74.77%
 * Memory Usage: 41.9 MB, less than 60.00%
 */
var findTarget = function (root, k) {
    let arr = [];
    traverse(root);
    let len = arr.length;
    let i = 0;
    let j = len - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === k) {
            return true;
        } else if (sum < k) {
            i++;
        } else {
            j--;
        }
    }
    return false;

    function traverse(node) {
        if (!node) return;
        if (node.left) traverse(node.left);
        arr.push(node.val);
        if (node.right) traverse(node.right);
    }
};