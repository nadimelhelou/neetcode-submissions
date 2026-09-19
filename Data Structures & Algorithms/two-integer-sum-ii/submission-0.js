class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var l = 0;
        var r = numbers.length - 1;

        while (l < r) {
            if (numbers[l] + numbers[r] === target) return new Array(l+1, r+1);
            else if (numbers[l] + numbers[r] > target) r--;
            else l++;
        }
    }
}
