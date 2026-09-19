class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var maxVal = 0;
        var l = 0;
        var r = heights.length-1;

        while (l < r) {
            maxVal = Math.max(maxVal, (r-l)*Math.min(heights[l], heights[r]));
            if (heights[l] < heights[r]) l++;
            else r--;
        }
        return maxVal;
    }
}
