// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * Runtime: 129 ms
 * Beats:63.49%
 */
var partition = function(head, x) {
    let smallHead = bigHead = smallP = bigP = null, p = head;
    while (p) {
        if (p.val < x) {
            if (!smallHead) {
                smallHead = p;
            } else {
                smallP.next = p;
            }
            smallP = p;
        } else {
            if (!bigHead) {
                bigHead = p;
            } else {
                bigP.next = p;
            }
            bigP = p;
        }
        p = p.next;
    }
    if (smallP) {
        smallP.next = bigHead;
    }
    if (bigP) {
        bigP.next = null;
    }
    return smallHead || bigHead;
};
