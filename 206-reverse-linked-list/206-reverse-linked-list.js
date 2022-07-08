/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    function reverse(node, prev = null) {
        if (!node) {
            return prev;
        }
        [next, node.next] = [node.next, prev];
        return reverse(next, node);
    }
  return reverse(head);
};