class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        console.log(res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var i = 0;
        var res = [];
        while (i < str.length) {
            var j = i;
            while (str[j] !== "#") {
                j +=1;
            }
            const length = parseInt(str.slice(i, j));
            res.push(str.slice(j+1, j+1+length));
            i = j + 1 + length;
        }
        return res;
    }
}
