// Sort a linked list using insertion sort.

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
 * Runtime: 175 ms
 * Beats: 53.57%
 */
var insertionSortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let sorted = head, p = head.next, insertPos, prev = null;
    sorted.next = null;
    while (p) {
        insertPos = sorted;
        prev = null;
        while (insertPos && insertPos.val <= p.val) {
            prev = insertPos;
            insertPos = insertPos.next;
        }
        if (!prev) {
            let t = p.next;
            p.next = sorted;
            sorted = p;
            p = t;
        } else {
            let t = p.next;
            prev.next = p;
            p.next = insertPos;
            p = t;
        }
    }
    return sorted;
};
