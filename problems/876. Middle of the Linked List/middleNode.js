/**
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 
Note:

The number of nodes in the given list will be between 1 and 100.
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
 * Runtime: 56 ms, faster than 87.06%
 * Memory Usage: 33.4 MB, less than 97.96%
 */
var middleNode = function (head) {
    let oneStep = head;
    let twoStep = head;
    while (twoStep && twoStep.next) {
        twoStep = twoStep.next;
        if (twoStep) {
            twoStep = twoStep.next;
        }
        oneStep = oneStep.next;
    }
    return oneStep;
};