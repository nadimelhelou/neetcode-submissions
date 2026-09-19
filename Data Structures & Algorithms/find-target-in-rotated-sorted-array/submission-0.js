class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var l = 0;
        var r = nums.length-1;

        while (l <= r) {
            var m = Math.floor((l+r)/2);

            if (nums[m] === target) return m;
            if (nums[l] <= nums[m]) {
                if (target > nums[m] || target < nums[l]) l = m+1;
                else r = m-1;
            }
            else {
                if (target < nums[m] || target > nums[r]) r = m-1;
                else l = m+1;
            } 
        }
        return -1;
    }
}
