// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 * Runtime: 139 ms
 * Beats: 24.71%
 */
var maxProfit = function(prices) {
    let i = 1, minBuy = prices[0], len = prices.length, max = 0;
    for (; i < len; i++) {
        minBuy = Math.min(minBuy, prices[i-1]);
        max = Math.max(max, prices[i]-minBuy);
    }
    return max;
};
