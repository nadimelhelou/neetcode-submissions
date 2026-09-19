class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        var out = [];
        var q = [];
        var front = 0;
        var l = 0;
        var r = 0;

        while (r < nums.length) {
            // Remove smaller elements from the BACK
            while (q.length > front && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }

            q.push(r);

            // Remove expired element from the FRONT
            if (q[front] < l) {
                front++;
            }

            // Add to result and move window (l) only after passing through the first k elements
            if ((r + 1) >= k) {
                out.push(nums[q[front]]);
                l++;
            }

            r++;
        }

        return out;
    }
}