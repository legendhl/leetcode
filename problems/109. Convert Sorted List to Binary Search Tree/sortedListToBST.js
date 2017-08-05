// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * Runtime: 136 ms
 * Beats: 48.84%
 */
var sortedListToBST = function(head) {
    let len = 0, p = head, mid;
    while (p) {
        len++;
        p = p.next;
    }
    return buildBST(head, len);

    function buildBST(head, len) {
        if (len <= 0 || !head) {
            return null;
        }
        let p = head, pMid = head, mid = Math.floor(len/2), leftLen = 0, rightLen;
        for (; leftLen<mid; leftLen++) {
            pMid = pMid.next;
        }
        rightLen = len-leftLen-1;
        let node = new TreeNode(pMid.val);
        node.left = buildBST(head, leftLen);
        node.right = buildBST(pMid.next, rightLen);
        return node;
    }
};
