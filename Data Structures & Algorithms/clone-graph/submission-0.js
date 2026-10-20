/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        var old2New = new Map();

        var dfs = (node) => {
            if (old2New.has(node)) {
                return old2New.get(node);
            }
            var copy = new Node(node.val, []);
            old2New.set(node, copy);
            for (const nei of node.neighbors) {
                copy.neighbors.push(dfs(nei));
            }
            return copy;
        }
        if (node) return dfs(node);
        else return null;
    }
}
