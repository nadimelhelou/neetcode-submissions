class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        var neighbors = new Map();
        for (var i=0; i<n; i++) {
            neighbors.set(i, []);
        }
        for (const [n1,n2] of edges) {
            neighbors.get(n1).push(n2);
            neighbors.get(n2).push(n1);
        }

        var visited = new Set();

        var dfs = (i, prev) => {
            if(visited.has(i)) return false;
            visited.add(i);
            for (const j of neighbors.get(i)) {
                if (j === prev) continue;
                if (!dfs(j, i)) return false;
            }
            return true;
        }
        return dfs(0, -1) && visited.size === n;
    }
}
