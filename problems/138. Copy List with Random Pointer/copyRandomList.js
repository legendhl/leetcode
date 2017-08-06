// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 * Runtime: 265 ms
 * Beats: 5.88%
 */
var copyRandomList = function(head) {
    let arr1 = [], arr2 = [], p = head, node;
    if (!head) {
        return null;
    }
    while (p) {
        node = new RandomListNode(p.label);
        arr1.push(p);
        arr2.push(node);
        p = p.next;
    }
    for (let i=0; i<arr2.length; i++) {
        arr2[i].next = i < arr2.length-1 ? arr2[i+1] : null;
        if (arr1[i].random !== null) {
            let idx = arr1.indexOf(arr1[i].random);
            arr2[i].random = arr2[idx];
        }
    }
    return arr2[0];
};
