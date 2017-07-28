// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.
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
 * Runtime: 149 ms
 * Beats: 33.86%
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let p = head, next = p.next;
    while (next) {
        if (p.val === next.val) {
            p.next = next.next;
        } else {
            p = p.next;
        }
        next = next.next;
    }
    return head;
};
