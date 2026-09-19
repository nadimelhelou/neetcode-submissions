// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        var myMap = new Map();
        myMap.set(null, null);
        var cur = head;

        while (cur) {
            myMap.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            var newNode = myMap.get(cur);
            newNode.next = myMap.get(cur.next);
            newNode.random = myMap.get(cur.random);
            cur = cur.next;
        }
        return myMap.get(head);
    }
}
