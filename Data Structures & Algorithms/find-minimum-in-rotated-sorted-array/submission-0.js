class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var l = 0;
        var r = nums.length - 1;

        while (l < r) {
            var m = Math.floor((l+r)/2);
            if (nums[m] > nums[r]) {
                l = m+1;
            } else {
                r = m;
            }
        }
        return nums[l];
    }
}
