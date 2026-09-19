/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var carry = 0;
        var dummy = new ListNode(-1);
        var cur = dummy;

        while (l1 && l2) {
            var sum = l1.val + l2.val + carry;
            carry = Math.floor(sum / 10);
            var res = sum - carry*10;
            cur.next = new ListNode(res);
            
            cur = cur.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        var rest = l1 || l2;
        while (rest) {
            var sum = rest.val + carry;
            carry = Math.floor(sum / 10);
            var res = sum - carry*10;
            cur.next = new ListNode(res);
            cur = cur.next;
            rest = rest.next;
        }
        if (carry > 0) {
            cur.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
