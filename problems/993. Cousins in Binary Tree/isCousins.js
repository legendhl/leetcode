/**
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * Runtime: 60 ms, faster than 100.00%
 * Memory Usage: 34.2 MB, less than 80.43%
 */
var isCousins = function (root, x, y) {
    let xParent = null;
    let yParent = null;
    let floor = [root];
    let nextFloor = [];
    while (floor.length > 0) {
        let node = floor.shift();
        if (node.left) {
            nextFloor.push(node.left);
            if (node.left.val === x) {
                xParent = node;
            } else if (node.left.val === y) {
                yParent = node;
            }
        }
        if (node.right) {
            nextFloor.push(node.right);
            if (node.right.val === x) {
                xParent = node;
            } else if (node.right.val === y) {
                yParent = node;
            }
        }
        if (floor.length === 0) {
            if (xParent && yParent && xParent !== yParent) {
                return true;
            } else if (xParent || yParent) {
                return false;
            }
            floor = nextFloor;
            nextFloor = [];
        }
    }
    return false;
};