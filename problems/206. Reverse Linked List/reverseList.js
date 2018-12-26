/**
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
pre node next
  1-->2-->3-->NULL
  1<--2   3
Output: 3-->2-->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 */
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
 * iteratively
 * Runtime: 56 ms
 * Beats: 100.00%
 */
var reverseList = function (head) {
    if (!head) return head;
    let newHead = head;
    let node = head.next;
    head.next = null;
    while (node) {
        let next = node.next;
        node.next = newHead;
        newHead = node;
        node = next;
    }
    return newHead;
};