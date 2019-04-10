/**
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:
     1
   / \  \
  3   2  4
 /\ 
5  6
We should return its max depth, which is 3.

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 * Runtime: 604 ms, faster than 85.67%
 * Memory Usage: 77 MB, less than 80.43%
 */
var maxDepth = function (root) {
    let depth = 0;
    if (!root) return depth;
    let curLevel = [root];
    let nextLevel = [];
    while (curLevel.length > 0) {
        let node = curLevel.shift();
        for (let i = 0; i < node.children.length; i++) {
            nextLevel.push(node.children[i]);
        }
        if (curLevel.length === 0) {
            depth++;
            curLevel = nextLevel;
            nextLevel = [];
        }
    }
    return depth;
};