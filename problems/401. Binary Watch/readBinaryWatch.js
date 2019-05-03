/**
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.


For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
 */
/**
 * @param {number} num
 * @return {string[]}
 * Runtime: 60 ms, faster than 86.79%
 * Memory Usage: 34.6 MB, less than 33.33%
 */
var readBinaryWatch = function (num) {
    let watch = new Array(10).fill(0);
    let res = [];
    track(watch, 0, 0);
    return res;

    function track(watch, i, total) {
        if (total === num) {
            printWatch(watch);
        } else if (total < num && i < watch.length) {
            watch[i] = 1;
            total++;
            track(watch, i + 1, total);
            watch[i] = 0;
            total--;
            track(watch, i + 1, total);
        }
    }

    function printWatch(watch) {
        let hour = 0;
        let minute = 0;
        for (let i = 0; i < 4; i++) {
            hour = hour * 2 + watch[i];
        }
        for (let i = 4; i < 10; i++) {
            minute = minute * 2 + watch[i];
        }
        if (hour < 12 && minute < 60) {
            res.push(hour + ':' + ('0' + minute).slice(-2));
        }
    }
};