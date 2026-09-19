class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var l = 0;
        var mySet = new Set();
        var res = 0;

        for (var r=0; r < s.length; r++) {
            while(mySet.has(s[r])) {
                mySet.delete(s[l]);
                l++;
            } 
            mySet.add(s[r]);
            res = Math.max(res, mySet.size);
        }
        return res;
    }
}
