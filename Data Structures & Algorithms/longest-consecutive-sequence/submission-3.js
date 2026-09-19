class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        var numSet = new Set(nums);
        var maxLength = 0;

        for (const num of numSet) {
            if (!numSet.has(num-1)) {
                var currentMax = 1;
                var currentNum = num+1;
                while(numSet.has(currentNum)) {
                    currentMax += 1;
                    currentNum += 1;
                }
                if (currentMax > maxLength) maxLength = currentMax;
            }
        }
        return maxLength;
    }
}
