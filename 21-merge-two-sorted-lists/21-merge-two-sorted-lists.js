/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }    
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   if (!list1 || (list2 && list1.val > list2.val)) {
    // list1이 없거나 (list2가 있고, 각 값이 list2가 더 작을때)
    // list1의 수가 list2의 값 보다 크고 list2의 값이 존재할때 혹은 list1이 존재하지 않을때
    [list1, list2] = [list2, list1];
  }
  if (list1) {
    list1.next = mergeTwoLists(list1.next, list2);
  }
  return list1;     
};