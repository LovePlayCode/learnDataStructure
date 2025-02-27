// 异步加法
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 1000);
}

// 验证 sum
async function total() {
  const res1 = await sum(1, 3, 5, 7, 9, 1, 3, 5, 7, 9);
  const res2 = await sum(1, 3, 5, 7, 9, 1, 3, 5, 7, 9);
  console.log([res1, res2]);
  return [res1, res2];
}
total();

function sum(...args) {
  // TODO 实现下 sum 函数。注意不能使用加法，在 sum 中借助 asyncAdd 完成加法。
  return new Promise((res, rej) => {
    if (args.length === 1) {
      return res(args[0]);
    }
    if (args.length === 2) {
      return asyncAdd(args[0], args[1], (err, sum) => {
        res(sum);
      });
    }

    // 数量特别大的时候怎么办
    // 请求排队
    const mid = args.length >> 1;
    const resArr = Promise.allSettled([
      sum(...args.slice(0, mid)),
      sum(...args.slice(mid, args.length)),
    ]);

    resArr.then((result) => {
      // 之前这里写的是result[0]  但是其实这里result 是一个对象，格式为{ status: 'fulfilled', value: 5 },
      // 所以我们需要写 value
      const [first, second] = result;
      const { status: firstStatus, value: firstValue } = first;
      const { status: secondStatus, value: secondValue } = second;
      asyncAdd(
        firstStatus === "fulfilled" ? firstValue : 0,
        secondStatus === "fulfilled" ? secondValue : 0,
        (err, sum) => {
          res(sum);
        }
      );
    });
  });
}
