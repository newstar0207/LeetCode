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
var oddEvenList = function(head) {
  let odd = (resultOdd = {}); // 홀
  let even = (resultEven = {}); // 짝

  if (!head?.next) return head; // val === 0 에 걸림

  while (head && head.next) {
    odd.next = head;
    odd = odd.next;
    head = head.next;
    odd.next = null;

    even.next = head;
    even = even.next;
    head = even.next;
    even.next = null;
  }
  if (head && (head.val || head.val === 0)) {
    odd.next = head;
    odd = odd.next;
    odd.next = null;
  }

  odd.next = resultEven.next ? resultEven.next : null;
  return resultOdd.next;
};