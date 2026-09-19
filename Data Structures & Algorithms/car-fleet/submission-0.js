class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        var stack = [];
        const pairs = position.map((x, i) => [x, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        for (const pair of pairs) {
            var p = pair[0];
            var s = pair[1];
            stack.push((target - p) / s);
            if (stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]) stack.pop();
        }
        return stack.length;
    }
}
