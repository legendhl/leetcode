/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = head = new ListNode(0), carry = 0;
    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;
        res.val = sum % 10;
        carry = sum >= 10 ? (sum-sum%10)/10 : 0;
        l1 = l1.next;
        l2 = l2.next;
        if (l1 || l2 || carry) {
            res.next = new ListNode(0);
            res = res.next;
        }
    }
    let l = l1 !== null ? l1 : l2;
    while (l) {
        let sum = l.val + carry;
        res.val = sum % 10;
        carry = sum >= 10 ? (sum-sum%10)/10 : 0;
        l = l.next;
        if (l || carry) {
            res.next = new ListNode(0);
            res = res.next;
        }
    }
    if (carry !== 0) {
        res.val = carry;
    }
    return head;
};