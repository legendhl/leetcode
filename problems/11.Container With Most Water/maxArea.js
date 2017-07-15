/**
 * @param {number[]} height
 * @return {number}
 * Time Limit Exceeded
 */
var maxArea = function(height) {
    let max = 0;
    for (let len=1; len<height.length; len++) {
        for (let i=0; i+len<height.length; i++) {
            let j = i+len, v;
            v = Math.min(height[i], height[j]) * (j-i);
            max = v > max ? v : max;
        }
    }
    return max;
};