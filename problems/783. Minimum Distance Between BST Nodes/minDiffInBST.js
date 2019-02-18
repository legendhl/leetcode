/**
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
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
 * Runtime: 72 ms, faster than 37.65%
 * Memory Usage: 33.8 MB, less than 100.00%
 */
var minDiffInBST = function (root) {
    let arr = [];
    traverse(root);
    let len = arr.length;
    let minDiff = arr[len - 1] - arr[0];
    for (let i = 1; i < len; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff;

    function traverse(root) {
        if (root.left) {
            traverse(root.left);
        }
        arr.push(root.val);
        if (root.right) {
            traverse(root.right);
        }
    }
};