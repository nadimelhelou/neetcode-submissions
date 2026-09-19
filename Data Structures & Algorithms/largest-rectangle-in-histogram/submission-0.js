class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        var maxArea = 0;
        var stack = []; // <index, hieght>

        for (var i=0; i<heights.length; i++) {
            var startOfCurRect = i;
            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                startOfCurRect = stack[stack.length - 1][0];
                maxArea = Math.max(maxArea, stack[stack.length - 1][1] * (i-startOfCurRect));
                stack.pop();
            }
            stack.push(new Array(startOfCurRect, heights[i]));
        }
        while (stack.length !== 0) {
            maxArea = Math.max(maxArea, stack[stack.length - 1][1] * (heights.length - stack[stack.length - 1][0]));
            stack.pop();
        }
        return maxArea;
    }
}
