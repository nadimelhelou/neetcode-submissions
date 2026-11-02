class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        var one = 1;
        var two = 1;

        for (var i=0; i<n-1; i++) {
            var temp = one;
            one = one + two;
            two = temp;
        }
        return one;
    }
}
