class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        var root = [];
        for (var i=0; i<n; i++) {
            root.push(i);
        }

        var findRoot = (node) => {
            var out = node;
            while (out !== root[out]) {
                out = root[out];
            }
            return out;
        }

        var merge = (n1, n2) => {
            var r1 = findRoot(n1);
            var r2 = findRoot(n2);
            if (r1 === r2) return false;
            else {
                root[r1] = r2;
                return true;
            }
        }

        var res = n;
        for (const [n1, n2] of edges) {
            if (merge(n1, n2)) res--;
        }
        return res;
    }
}
