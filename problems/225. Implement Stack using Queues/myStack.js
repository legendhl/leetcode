/**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 */
/**
 * Initialize your data structure here.
 * Runtime: 76 ms
 * Beats: 12.35%
 */
var MyStack = function () {
    this.main = [];
    this.sub = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.main.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.empty()) {
        return null;
    } else {
        while (this.main.length > 1) {
            this.sub.push(this.main.shift());
        }
        let top = this.main.shift();
        [this.main, this.sub] = [this.sub, this.main];
        return top;
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.empty()) {
        return null;
    } else {
        while (this.main.length > 1) {
            this.sub.push(this.main.shift());
        }
        let top = this.main.shift(); // peek
        this.sub.push(top);
        [this.main, this.sub] = [this.sub, this.main];
        return top;
    }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.main.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */