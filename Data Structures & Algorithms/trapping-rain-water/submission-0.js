class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var res = 0;
        var l = 0;
        var r = height.length - 1;
        var maxL = height[l];
        var maxR = height[r];

        while (l < r) {
            if (maxL < maxR) {
                l += 1;
                if (Math.min(maxL, maxR) - height[l] > 0) res += Math.min(maxL, maxR) - height[l];
                maxL = Math.max(maxL, height[l]);
                
            } else {
                r -= 1;
                if (Math.min(maxL, maxR) - height[r] > 0) res += Math.min(maxL, maxR) - height[r];
                maxR = Math.max(maxR, height[r]);
            }
        }

        return res
    }
}
