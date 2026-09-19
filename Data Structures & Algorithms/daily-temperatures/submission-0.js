class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var res = new Array(temperatures.length).fill(0);
        var stack = [];

        for (var i=0; i<temperatures.length; i++) {
            if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
                stack.push(i);
            } else {
                while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                    res[stack[stack.length - 1]] = i - stack[stack.length - 1];
                    stack.pop();
                }
                stack.push(i);
            }
        }
        return res;
    }
}
