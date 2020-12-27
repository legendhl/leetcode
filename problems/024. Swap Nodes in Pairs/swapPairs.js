/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null;
  let first = head,
    secode = head.next,
    newHead = secode ? secode : first,
    last = null;
  while (first && secode) {
    first.next = secode.next;
    secode.next = first;
    if (last) {
      last.next = secode;
    }
    last = first;
    first = first.next;
    if (first) {
      secode = first.next;
    } else {
      break;
    }
  }
  return newHead;
};
