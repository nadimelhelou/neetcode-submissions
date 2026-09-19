class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var map = new Map();
        map.set(')', '(');
        map.set(']', '[');
        map.set('}', '{');
        var stack = [];

        for (var i=0; i<s.length; i++) {
            if (map.has(s[i])) {
                if (stack[stack.length - 1] === map.get(s[i])) {
                    stack.pop();
                } else return false;
            } else {
                stack.push(s[i]);
            }
        }
        return stack.length === 0;
    }
}
