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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        var counter = 0;
        var res;

        function traverseInOrder(node) {
            if (!node) return;

            traverseInOrder(node.left);

            counter++;
            if (counter === k) {
                res = node.val;
                return;
            }
            traverseInOrder(node.right);
        }

        traverseInOrder(root);
        return res;
    }
}
