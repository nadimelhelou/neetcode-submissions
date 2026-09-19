class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        var countMap = new Map();
        var res = 0;
        var l = 0;

        for (var r=0; r<s.length; r++) {
            countMap.set(s[r], (countMap.get(s[r]) || 0) + 1);

            while ((r-l+1) - Math.max(...countMap.values()) > k) {
                countMap.set(s[l], countMap.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
