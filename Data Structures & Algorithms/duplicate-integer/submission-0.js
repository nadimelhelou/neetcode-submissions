class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set();

        for (const num of nums) {
            if (mySet.has(num)) {
                return true;
            } else {
                mySet.add(num);
            }
        }
        return false;
    }
}
