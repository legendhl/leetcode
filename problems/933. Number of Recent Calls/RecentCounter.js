/**
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

Example 1:
Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]

Note:

Each test case will have at most 10000 calls to ping.
Each test case will call ping with strictly increasing values of t.
Each call to ping will have 1 <= t <= 10^9.
 */
var RecentCounter = function () {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 * Runtime: 344 ms, faster than 47.28%
 * Memory Usage: 57 MB, less than 47.06%
 */
RecentCounter.prototype.ping = function (t) {
    let count = 0;
    for (let i = 0; i < this.queue.length; i++) {
        let time = this.queue[i];
        if (time + 3000 < t) {
            count++;
        }
    }
    while (count--) {
        this.queue.shift();
    }
    this.queue.push(t);
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */