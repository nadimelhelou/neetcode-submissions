class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (const num of nums) {
            count.set(num, 1 + (count.get(num) || 0));
        }
        for (const [n, c] of count) {
            freq[c].push(n);
        }

        const res = new Array();

        for (var i=freq.length - 1; i>=0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
