class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var leftVar = Array(nums.length).fill(1);
        var rightVar = Array(nums.length).fill(1);;

        for (var i=0; i<nums.length; i++) {
            if (i!==0) leftVar[i] = leftVar[i-1] * nums[i-1];
        }

        for (var i=nums.length-1; i>=0; i--) {
            if (i!==nums.length-1) rightVar[i] = rightVar[i+1] * nums[i+1];
        }

        var sol = Array(nums.length).fill(1);
        for (var i=0; i<nums.length; i++) {
            sol[i] = leftVar[i] * rightVar[i];
        }

        return sol;
    }
}
