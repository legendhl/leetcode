// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
 * Runtime: 159 ms
 * Beats: 14.91%
 */
var minDepth = function(root) {
    if (!root) return 0;
    let depth = 1, p = null, queue = [root], numInThisLevel = 1;
    while (p || queue.length) {
        p = queue.shift();
        if (!p.left && !p.right) {
            return depth;
        }
        if (p.left) {
            queue.push(p.left);
        }
        if (p.right) {
            queue.push(p.right);
        }
        if (--numInThisLevel === 0) {
            depth++;
            numInThisLevel = queue.length;
        }
    }
    return depth;
};
