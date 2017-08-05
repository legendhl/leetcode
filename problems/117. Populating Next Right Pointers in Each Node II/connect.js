// Follow up for problem "Populating Next Right Pointers in Each Node".

// What if the given tree could be any binary tree? Would your previous solution still work?

// Note:

// You may only use constant extra space.
// For example,
// Given the following binary tree,
//          1
//        /  \
//       2    3
//      / \    \
//     4   5    7
// After calling your function, the tree should look like:
//          1 -> NULL
//        /  \
//       2 -> 3 -> NULL
//      / \    \
//     4-> 5 -> 7 -> NULL

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 * Runtime: 209 ms
 * Beats: 13.89%
 */
var connect = function(root) {
    let queue = [root], q = null, numOfThisLevel = 1;
    while (queue.length) {
        q = queue.shift();
        if (q) {
            if (q.left) {
                queue.push(q.left);
            }
            if (q.right) {
                queue.push(q.right);
            }
            if (--numOfThisLevel === 0) {
                numOfThisLevel = queue.length;
                q.next = null;
            } else {
                q.next = queue[0];
            }
        }
    }
};
