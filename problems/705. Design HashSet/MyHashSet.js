/**
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet. 
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

Example:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)

Note:

All values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashSet library.
 */
/**
 * Initialize your data structure here.
 * Runtime: 200 ms, faster than 86.08%
 * Memory Usage: 53.9 MB, less than 11.11%
 */
var MyHashSet = function () {
    this.hashSet = new Array(16);
    this.length = 16;
    this.size = 0;
    this.loadFactor = 0.75;
    this.resize = () => {
        let oldSet = this.hashSet;
        this.length *= 2;
        this.hashSet = new Array(this.length);
        for (let i = 0; i < oldSet.length; i++) {
            let arr = oldSet[i];
            if (arr) {
                for (let j = 0; j < arr.length; j++) {
                    let key = arr[j];
                    let index = key & (this.length - 1);
                    if (this.hashSet[index]) {
                        this.hashSet[index].push(key);
                    } else {
                        this.hashSet[index] = [key];
                    }
                }
            }
        }
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.size + 1 >= this.length * this.loadFactor) {
        this.resize();
    }
    let index = key & (this.length - 1);
    if (!this.hashSet[index]) {
        this.hashSet[index] = [key];
        this.size++;
    } else if (!this.hashSet[index].includes(key)) {
        this.hashSet[index].push(key);
        this.size++;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let index = key & (this.length - 1);
    if (this.hashSet[index]) {
        for (let i = 0; i < this.hashSet[index].length; i++) {
            if (this.hashSet[index][i] === key) {
                this.hashSet[index].splice(i, 1);
            }
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let index = key & (this.length - 1);
    if (!this.hashSet[index]) {
        return false;
    } else {
        for (let i = 0; i < this.hashSet[index].length; i++) {
            if (this.hashSet[index][i] === key) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */