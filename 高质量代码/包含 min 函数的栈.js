class MinStack {
  // 辅助栈
  minStack = [];
  // 实际存放数据的栈
  dataStack = [];
  pop() {
    if (this.dataStack.length >= 0) {
      const res = this.dataStack.pop();
      this.minStack.pop();
      return res;
    }
    return null;
  }
  push(data) {
    this.dataStack.push(data);
    const minVal = this.minStack[this.minStack.length - 1];
    if (this.minStack.length === 0) {
      this.minStack.push(data);
      return;
    }

    if (data < minVal) {
      this.minStack.push(data);
    } else {
      this.minStack.push(minVal);
    }
  }
  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
const minStack = new MinStack();
minStack.push(10);
minStack.push(100);
console.log(minStack.min());
