// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 * Runtime: 122 ms
 * Beats: 54.36%
 */
var maxProfit = function(prices) {
    let profit = 0, buy, sell, i = 1, len = prices.length;
    while (i < len) {
        while (i < len && prices[i] <= prices[i-1]) {
            i++;
        }
        buy = prices[i-1];
        while (i < len && prices[i] >= prices[i-1]) {
            i++;
        }
        sell = prices[i-1];
        profit += Math.max(sell-buy, 0);
    }
    return profit;
};
