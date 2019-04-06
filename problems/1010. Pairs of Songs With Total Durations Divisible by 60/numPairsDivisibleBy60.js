/**
In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

Example 1:
Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:
Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.

Note:

1 <= time.length <= 60000
1 <= time[i] <= 500
 */
/**
 * @param {number[]} time
 * @return {number}
 * Runtime: 148 ms, faster than 52.98%
 * Memory Usage: 40.8 MB, less than 100.00%
 */
var numPairsDivisibleBy60 = function (time) {
    let mod = [];
    let hash = {};
    let pairs = 0;
    for (let i = 0; i < time.length; i++) {
        let m = time[i] % 60;
        mod[i] = m;
        if (hash[m]) {
            hash[m].push(i);
        } else {
            hash[m] = [i];
        }
    }
    for (let i = 0; i < time.length; i++) {
        let m = mod[i];
        let pair = m === 0 ? 0 : 60 - m;
        let times = hash[pair];
        if (times) {
            for (let j = 0; j < times.length; j++) {
                if (times[j] > i) {
                    pairs++;
                }
            }
        }
    }
    return pairs;
};