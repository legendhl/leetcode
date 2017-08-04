// Given a linked list, determine if it has a cycle in it.

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
 * @return {boolean}
 * Runtime: 116 ms
 * Beats: 42.34%
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    let p1 = head, p2 = head;
    while (p1 && p2) {
        p1 = p1.next;
        if (!p1) {
            return false;
        }
        p2 = p2.next;
        if (!p2) {
            return false;
        }
        p2 = p2.next;
        if (!p2) {
            return false;
        }
        if (p1 === p2 || p2.next === p1) {
            return true;
        }
    }
    return false;
};
