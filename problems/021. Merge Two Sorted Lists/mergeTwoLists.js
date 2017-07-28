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
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let l, m, h, p;
    if (l1.val < l2.val) {
        h = l = l1;
        m = l2;
    } else {
        h = l = l2;
        m = l1;
    }
    l = l.next;
    p = h;
    while (l && m) {
        if (l.val <= m.val) {
            p.next = l;
            p = l;
            l = l.next;
        } else {
            p.next = m;
            p = m;
            m = m.next;
        }
    }
    if (l) {
        p.next = l;
    }
    if (m) {
        p.next = m;
    }
    return h;
};