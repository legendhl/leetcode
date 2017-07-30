// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ? m ? n ? length of list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 * Runtime: 103 ms
 * Beats: 90.48%
 */
var reverseBetween = function(head, m, n) {
    let newHead = new ListNode(0), p = newHead, prev, next, first;
    newHead.next = head;
    for (let i=1; i<=m-1; i++) {
        p = p.next;
    }
    prev = p;
    p = p.next;
    first = p;
    for (let i=0; i<(n-m); i++) {
        let t = p.next.next;
        p.next.next = first;
        first = p.next;
        p.next = t;
    }
    next = p.next;
    prev.next = first;
    return newHead.next;
};
