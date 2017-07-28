// Given a list, rotate the list to the right by k places, where k is non-negative.
//
// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Runtime: 152 ms
 * Beats: 26.47%
 */
var rotateRight = function(head, k) {
    let a = head, b = head, aPrev, bPrev, len=0;
    if (k <= 0) return head;
    for (let i=0; i<k && b; i++, len++) {
        b = b.next;
    }
    if (!b && k >= len) {
        k %= len;
        if (k <= 0) return head;
        b = head;
        for (let i=0; i<k && b; i++) {
            b = b.next;
        }
    }
    if (a === b) return head;
    while (b) {
        aPrev = a;
        bPrev = b;
        a = a.next;
        b = b.next;
    }
    aPrev.next = b;
    bPrev.next = head;
    head = a;
    return head;
};
