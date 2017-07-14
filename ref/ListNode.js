function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getListNode(arr) {
    if (!arr || !arr.length) return null;
    let head = new ListNode(arr[0]), node = head;
    for (let i=1; i<arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head;
}