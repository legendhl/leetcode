/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p1 = head, p2 = p1;
    for (let i=0; i<n; i++) {
        p2 = p2.next;
    }
    if (!p2) {
        head = head.next;
        return head;
    }
    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return head;
};