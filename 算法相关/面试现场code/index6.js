/**
 * 异步任务 Promise resolve
 * 并发限制
 */
class Scheduler {
  constructor() {
    this.count = 2;
    // 等待队列
    this.queue = [];
    this.run = [];
  }
  /**
   * 1. 塞任务
   * @param {*} task
   */
  add(task) {
    // ...
    // 要实现并发控制
    // 返回一个 Promise
    // 1. 一个 task 就是一个任务，任务超过阈值就不能在添加了，需要放到等待队列中。
    // 2. 一个任务完成的条件是他正常返回，我们可以认为这个任务结束了。
    // 3. resolve 的条件是任务执行完毕
    // 实现步骤
    // 1. 判断阈值
    // 2. 在阈值内的任务可以运行
    // 3. 每个任务执行完后，在等待队列中取出待执行任务继续执行。

    // chatGpt实现: 1. 创建一个包装任务，将 task 包装进去，在 task  resolve 之后调用顶层的 res，然后运行下一个任务。
    return new Promise((res) => {
      const runTask = () => {
        task().then((resolve) => {
          res(resolve);
          this.run = this.run.filter((item) => item !== runTask);
          if (this.queue.length) {
            
            this.queue.shift()();
          }
        });
      };
      if (this.run.length < this.count) {
        this.run.push(runTask);
        runTask()
      } else {
        this.queue.push(runTask);
      }
    });
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output: 2 3 1 4

// 前两次 立即执行  后面等待 ,等到执行完成空出来，依次塞进去。
