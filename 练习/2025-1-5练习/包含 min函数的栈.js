class MinStack {
  stack = [];
  minStack = [];
  push(value) {
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    }
    const minVal = this.minStack[this.minStack.length - 1];
    if (value < minVal) {
      this.minStack.push(value);
    } else {
      this.minStack.push(minVal);
    }
    this.stack.push(value);
  }
  pop() {
    if (this.stack.length > 0) {
      const res = this.stack.pop();
      this.minStack.pop();
      return res;
    }
    return null;
  }
  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
