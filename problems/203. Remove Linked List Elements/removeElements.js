/**Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 * Runtime: 76 ms
 * Beats: 77.54%
 */
var removeElements = function(head, val) {
    if (!head) return head;
    let newHead = head;
    let pre = head;
    let node = head.next;
    while (node) {
        if (node.val === val) {
            pre.next = node.next;
        } else {
            pre = node;
        }
        node = node.next;
    }
    return newHead.val === val ? newHead.next : newHead;
};