const checkForLoop = ({ head }) => {
  let hasLoop = false;

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    if (fastPointer === null) {
      break;
    }
    if (fastPointer.key === slowPointer.key) {
      hasLoop = true;
      break;
    }

    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
    if (fastPointer === null) {
      break;
    }
    if (fastPointer.key === slowPointer.key) {
      hasLoop = true;
      break;
    }
  }

  return hasLoop;
};

module.exports = checkForLoop;