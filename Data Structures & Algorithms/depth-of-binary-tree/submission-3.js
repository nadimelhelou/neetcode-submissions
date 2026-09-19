/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        // Recursive DFS
        // if (!root) return 0;
        // return 1+ Math.max(this.maxDepth(root.left), this.maxDepth(root.right));

        // BFS
        if (!root) return 0;
        var queue = [root];
        var level = 0;

        while (queue.length > 0) {
            const levelSize = queue.length;
            for (var i=0; i<levelSize; i++) {
                var node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            level++;
        }
        return level;
    }
}
