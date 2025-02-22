class Queue {
  stack1 = [];
  stack2 = [];
  appendTail(val) {
    this.stack1.push(val);
  }

  deleteHead() {
    if (this.stack2.length <= 0) {
      if (this.stack1.length >= 0) {
        while (this.stack1.length > 0) {
          const val = this.stack1.pop();
          this.stack2.push(val);
        }
      }
    }
    if (this.stack2.length === 0) {
      throw new Error("queue 是空的");
    }
    return this.stack2.pop();
  }
}

const queue = new Queue();
queue.appendTail(2);
queue.appendTail(3);
const val = queue.deleteHead();
console.log(val);
queue.appendTail(222);
queue.appendTail(3);
console.log(queue.deleteHead());
