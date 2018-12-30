/**
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 * Runtime: 64 ms
 * Beats: 100%
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    let len = 1;
    let pre = head;
    let node = head.next;
    while (node) {
        node.pre = pre;
        pre = node;
        node = node.next;
        len++;
    }
    node = head;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        node = node.next;
    }
    let next;
    pre = node.pre;
    if (len % 2 === 1) {
        next = node.next;
    } else {
        next = node;
    }
    while (pre && next) {
        if (pre.val !== next.val) return false;
        pre = pre.pre;
        next = next.next;
    }
    return true;
};