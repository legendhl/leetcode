/**
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.
 */
/**
 * @param {number} k
 * @param {number[]} nums
 * Runtime: 852 ms, faster than 20.25%
 * Memory Usage: 44.4 MB, less than 100.00%
 */
var KthLargest = function (k, nums) {
    this.arr = [...nums];
    this.size = nums.length;
    this.k = k;
    this.heapify = function (arr, i, size) {
        let largest = i;
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        if (left < size && arr[left] > arr[largest]) largest = left;
        if (right < size && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            this.heapify(arr, largest, size)
        }
    }
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
        this.heapify(this.arr, i, this.size);
    }
    for (let i = this.size - 1; i > 0; i--) {
        [this.arr[0], this.arr[i]] = [this.arr[i], this.arr[0]];
        this.heapify(this.arr, 0, i);
    }
    return null;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.arr.push(val);
    this.size++;
    for (let i = this.size - 2; i >= 0; i--) {
        if (val < this.arr[i]) {
            [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
        } else {
            break;
        }
    }
    return this.arr[this.size - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */