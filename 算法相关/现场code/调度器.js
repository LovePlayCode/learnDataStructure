// 实现一个支持并发限制的异步任务调度器
// 题目描述：
// 你需要实现一个异步任务调度器 Scheduler，满足以下要求：

// 并发限制：同时最多只能有 N 个任务正在执行。
// 任务队列：超出并发限制的任务需要排队等待。
// 任务执行：当一个任务执行完成后，从队列中取出下一个任务执行。
// 任务格式：每个任务是一个返回 Promise 的函数，例如：() => fetch(url)。

class Scheduler {
  // show me your code
  maxCount = 0;
  queue = [];
  pendingExecution = [];
  constructor(n) {
    this.maxCount = n;
    this.queue = [];
  }
  add(task) {
    if (this.maxCount > n) {
      this.maxCount = n;
    }
    if (this.maxCount > 0) {
      this.maxCount--;
      task().then(() => {
        this.maxCount++;
        if (this.pendingExecution.length > 0) {
          const first = this.pendingExecution.shift();
          this.add(first);
        }
      });
    } else {
      this.pendingExecution.push(task);
    }
  }
}

// 测试代码
const scheduler = new Scheduler(2);

const start = Date.now();
function addTask(delay, name) {
  scheduler.add(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(name, Date.now() - start);
          resolve();
        }, delay);
      })
  );
}

addTask(1000, "任务1");
addTask(500, "任务2");
addTask(300, "任务3");
addTask(400, "任务4");

// 输出：
// 500ms 后：任务2
// 800ms 后：任务3
// 1000ms 后：任务1
// 1200ms 后：任务4
