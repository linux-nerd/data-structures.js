const reverseList = (llist) => {
  let head = llist;
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  head = prevNode;
  return head;
};

module.exports = reverseList;