/**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */
/**
 * initialize your data structure here.
 * Runtime: 108 ms
 * Beats: 44.29%
 */
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let len = this.stack.length;
    if (len) {
        let top = this.stack[len - 1];
        this.stack.push({ val: x, min: Math.min(x, top.min) });
    } else {
        this.stack.push({ val: x, min: x });
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let top = this.stack.pop();
    return top ? top.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let len = this.stack.length;
    return len > 0 ? this.stack[len - 1].val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let len = this.stack.length;
    return len > 0 ? this.stack[len - 1].min : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */