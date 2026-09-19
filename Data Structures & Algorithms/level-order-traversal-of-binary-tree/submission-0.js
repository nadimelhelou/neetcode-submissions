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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        var out = [];
        var queue = [root];

        while (queue.length > 0) {
            var curLevelLength = queue.length;
            var curLevel = [];
            for (var i=0; i<curLevelLength; i++) {
                var curNode = queue.shift();
                curLevel.push(curNode.val);
                if (curNode.left) queue.push(curNode.left);
                if (curNode.right) queue.push(curNode.right);
            }
            out.push(curLevel);
        }
        return out;
    }
}
