import { Stack } from "./stack";

describe("Linked List Implementation of Stacks", () => {
  let stack: Stack<String>;
  beforeEach(() => {
    stack = new Stack<String>();
  });

  it("should create a stack object", () => {
    expect(stack).toBeDefined();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  describe("push operation", () => {
    it("should insert element in the stack", () => {
      stack.push("A");
      expect(stack.size()).toBe(1);
      expect(stack.isEmpty()).toBeFalsy();

      stack.push("B");
      expect(stack.size()).toBe(2);

      stack.push("C");
      stack.push("D");
      stack.push("E");
      stack.push("F");
      expect(stack.size()).toBe(6);
    });
  });

  describe("pop and peek opetarion", () => {
    beforeEach(() => {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      stack.push("D");
      stack.push("E");
      stack.push("F");
    });

    it("should pop elements out of the stack", () => {
      expect(stack.size()).toBe(6);
      expect(stack.peek()).toBe("F");
      expect(stack.pop()).toBe("F");
      expect(stack.size()).toBe(5);

      expect(stack.peek()).toBe("E");
      expect(stack.pop()).toBe("E");
      expect(stack.size()).toBe(4);

      stack.pop();
      stack.pop();
      stack.pop();

      expect(stack.peek()).toBe("A");
      expect(stack.pop()).toBe("A");
      expect(stack.size()).toBe(0);
    });
  });
});
