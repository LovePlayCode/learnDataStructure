function fetch(api) {
  return new Promise((res) => {
    setTimeout(() => {
      res(api);
    }, Math.random() * 1000);
  });
}

class ConcurrencyRequest {
  // 保存所有待执行的任务
  arr = [];
  // 跟踪正在执行的请求数量
  count = 0;
  constructor(size) {
    this.size = size;
  }

  // 当调用 request() 时，创建一个任务并加入队列
  // 检查当前运行任务数是否小于最大并发数
  // 如果未达上限，立即执行任务；否则等待
  // 任务完成后自动触发下一个任务的执行
  request(api) {
    return new Promise((res, rej) => {
      // 构造一个任务函数，执行真正的请求，如果此次请求完美执行，再去启动下一轮的任务。
      const taskFet = async () => {
        this.count++;
        try {
          const result = await fetch(api);
          res(result);
        } catch (error) {
          rej(error);
        } finally {
          this.count--;
          this.executeNext();
        }
      };

      this.arr.push(taskFet);
      this.executeNext();
    });
  }
  executeNext() {
    if (this.count < this.size && this.arr.length) {
      const nextTask = this.arr.shift();
      nextTask();
    }
  }
  task(api, resolve) {
    return fetch(api).then((res) => {
      resolve(res);
    });
  }
}
const myFetch = new ConcurrencyRequest(2);
myFetch.request("api1").then((res) => {
  console.log(res);
});
myFetch.request("api2").then((res) => {
  console.log(res);
});
myFetch.request("api3").then((res) => {
  console.log(res);
});
myFetch.request("api5").then((res) => {
  console.log(res);
});
myFetch.request("api6").then((res) => {
  console.log(res);
});
