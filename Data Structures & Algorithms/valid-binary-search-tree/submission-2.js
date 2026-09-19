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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.valid(root, -Infinity, Infinity);
    }

    valid(root, left, right) {
        if (!root) return true;
        if (root.val <= left || root.val >= right) return false;
        return this.valid(root.left, left, root.val) && this.valid(root.right, root.val, right);
    }
}
