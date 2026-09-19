class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (var i=0; i<nums.length; i++) {
            var num = nums[i];
            if (map.has(target - num)) {
                return [map.get(target - num), i];
            } else {
                if (!map.has(num)) {
                    map.set(num, i);
                }
            }
        }
        return;
    }
}
