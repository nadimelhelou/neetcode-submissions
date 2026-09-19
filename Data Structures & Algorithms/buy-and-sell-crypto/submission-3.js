class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var out = 0;
        var l = 0;
        var r = 1;

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r++;
            } else {
                out = Math.max(out, prices[r] - prices[l]);
                r++;
            }
        }
        return out;
    }
}
