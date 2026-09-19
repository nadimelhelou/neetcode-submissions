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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // Find mid point
        var slow = head;
        var fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Split into 2 lists and reverse 2nd half
        var headOfSecondHalf = slow.next;
        slow.next = null;
        var prev = null;
        while (headOfSecondHalf) {
            var temp = headOfSecondHalf.next;
            headOfSecondHalf.next = prev;
            prev = headOfSecondHalf;
            headOfSecondHalf = temp;
        }
        headOfSecondHalf = prev;

        // Merge
        while (head && headOfSecondHalf) {
            var tmp1 = head.next;
            var tmp2 = headOfSecondHalf.next;
            head.next = headOfSecondHalf;
            headOfSecondHalf.next = tmp1;
            head = tmp1;
            headOfSecondHalf = tmp2;
        }
    }
}
