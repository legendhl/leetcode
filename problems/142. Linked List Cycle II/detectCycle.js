// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Note: Do not modify the linked list.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 132 ms
 * Beats: 16.67%
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let p1 = head, p2 = head;
    do {
        p2 = p2.next;
        if (p2 === null) {
            return null;
        }
        p2 = p2.next;
        if (p2 === null) {
            return null;
        }
        p1 = p1.next;
    } while (p1 !== p2);
    p1 = head;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};
