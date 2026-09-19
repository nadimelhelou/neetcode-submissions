class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var left = 0;
        var right = s.length-1;

        while (left < right) {
            if (!/^[a-zA-Z0-9]$/.test(s[left])) {
                left++;
                continue;
            }
            if (!/^[a-zA-Z0-9]$/.test(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}
