/**
Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:
     1
   / \  \
  3   2  4
 /\ 
5  6
We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]

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
 * @return {number[][]}
 * Runtime: 780 ms, faster than 5.04%
 * Memory Usage: 80.7 MB, less than 31.91%
 */
var levelOrder = function (root) {
    let result = [];
    let curVal = [];
    let level = [root];
    let nextLevel = [];
    while (level.length > 0) {
        let node = level.shift();
        if (!node) break;
        curVal.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            nextLevel.push(node.children[i]);
        }
        if (level.length === 0) {
            level = nextLevel;
            nextLevel = [];
            result.push(curVal);
            curVal = [];
        }
    }
    return result;
};