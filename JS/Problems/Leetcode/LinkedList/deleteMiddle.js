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

var deleteMiddle = function (head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  let middle = Math.floor(length / 2);
  return deleteAtIndex(middle, head);
};
function deleteAtIndex(index, head) {
  if (index == 0) return head.next;

  let i = 0;
  let currentNode = head;
  let prevNode = null;
  while (i < index && currentNode !== null) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    i++;
  }
  prevNode.next = currentNode.next;
  return head;
}
