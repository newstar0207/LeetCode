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
var swapPairs = function(head) {
  let root = head;

  while (root && root.next) {
    [root.val, root.next.val] = [root.next.val, root.val];
    root = root.next.next;
  }
  return head;
};