class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var stack = [];
        var operators = new Set(['+', '-', '*', '/']);

        for (var i=0; i<tokens.length; i++) {
            if (operators.has(tokens[i])) {
                var n2 = stack[stack.length - 1];
                stack.pop();
                var n1 = stack[stack.length - 1];
                stack.pop();
                if (tokens[i] === '+') stack.push(n1+n2);
                if (tokens[i] === '-') stack.push(n1-n2);
                if (tokens[i] === '*') stack.push(n1*n2);
                if (tokens[i] === '/') stack.push(Math.trunc(n1/n2));
            } else {
                stack.push(Number(tokens[i]));
            }
        }
        return stack[0];
    }
}
