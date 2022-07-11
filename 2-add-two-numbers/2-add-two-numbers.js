/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let carry = 0; // 몫
  let val = 0;
  let root = (list = { val: 0, next: null });

  while (l1 || l2 || carry) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }


    val = (sum + carry) % 10;

    carry = Math.floor((sum + carry) / 10);


    list.next = { val: val, next : null };
    list = list.next;
  }
  return root.next; 
};