class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        var out = [];
        var queue = [];
        var front = 0;
        var back = -1;

        for (var r = 0; r < nums.length; r++) {

            // Remove elements that are outside the window
            if (front <= back && queue[front] < r - k + 1) {
                front++;
            }

            // Remove smaller elements from the back
            while (
                front <= back &&
                nums[queue[back]] < nums[r]
            ) {
                back--;
            }

            // Add current index
            back++;
            queue[back] = r;

            // Window has reached size k
            if (r >= k - 1) {
                out.push(nums[queue[front]]);
            }
        }

        return out;
    }
}