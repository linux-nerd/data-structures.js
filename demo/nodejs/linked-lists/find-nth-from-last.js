const findNthFromLast = (llist, nth) => {
  const { head } = llist;
  let currentNode = head;
  let diffNode = head;

  for (let i = 0; i < nth; i++) {
    currentNode = currentNode.next;
  }

  while (currentNode !== null) {
    currentNode = currentNode.next;
    diffNode = diffNode.next;
  }

  return diffNode.key;
};

module.exports = findNthFromLast;