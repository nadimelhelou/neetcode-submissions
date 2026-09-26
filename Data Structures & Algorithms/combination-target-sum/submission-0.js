class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        var out = [];
        var helper = (i, curr, total) => {
            if (total === target) {
                out.push([...curr]);
                return;
            }
            if (i >= nums.length || total > target) {
                return;
            }
            curr.push(nums[i]);
            helper(i, curr, total + nums[i]);
            curr.pop();
            helper(i+1, curr, total);
        }
        helper(0, [], 0);
        return out;
    }
}
