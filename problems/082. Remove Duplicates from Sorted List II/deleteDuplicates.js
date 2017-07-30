// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.

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
 * Runtime: 145 ms
 * Beats: 19.75%
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let p = head, newHead = new ListNode(null), prev = newHead, last = p.val, count = 1;
    newHead.next = head;
    p = p.next;
    while (p) {
        // p = p.next;
        if (p.val === last) {
            count++;
        } else {
            if (count > 1) {
                prev.next = p;
            } else {
                prev = prev.next;
            }
            last = p.val;
            count = 1;
        }
        p = p.next;
    }
    if (count > 1) {
        prev.next = p;
    }
    return newHead.next;
};
