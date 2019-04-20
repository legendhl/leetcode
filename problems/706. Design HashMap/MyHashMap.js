/**
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
 */
/**
 * Initialize your data structure here.
 * Runtime: 216 ms, faster than 95.77%
 * Memory Usage: 54.4 MB, less than 14.29%
 */
var MyHashMap = function () {
    this.hashMap = new Array(16);
    this.length = 16;
    this.size = 0;
    this.loadFactor = 0.75;
    this.resize = () => {
        let oldMap = this.hashMap;
        this.length *= 2;
        this.hashMap = new Array(this.length);
        for (let i = 0; i < oldMap.length; i++) {
            let arr = oldMap[i];
            if (arr) {
                for (let j = 0; j < arr.length; j++) {
                    let item = arr[j];
                    let index = item.key & (this.length - 1);
                    if (this.hashMap[index]) {
                        this.hashMap[index].push(item);
                    } else {
                        this.hashMap[index] = [item];
                    }
                }
            }
        }
    }
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (this.size + 1 >= this.length * this.loadFactor) {
        this.resize();
    }
    let index = key & (this.length - 1);
    if (!this.hashMap[index]) {
        this.hashMap[index] = [{ key, value }];
    } else {
        for (let i = 0; i < this.hashMap[index].length; i++) {
            if (this.hashMap[index][i].key === key) {
                this.hashMap[index][i].value = value;
                return;
            }
        }
        this.hashMap[index].push({ key, value });
    }
    this.size++;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let index = key & (this.length - 1);
    if (!this.hashMap[index]) {
        return -1;
    } else {
        for (let i = 0; i < this.hashMap[index].length; i++) {
            if (this.hashMap[index][i].key === key) {
                return this.hashMap[index][i].value;
            }
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let index = key & (this.length - 1);
    if (this.hashMap[index]) {
        for (let i = 0; i < this.hashMap[index].length; i++) {
            if (this.hashMap[index][i].key === key) {
                this.hashMap[index].splice(i, 1);
            }
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */