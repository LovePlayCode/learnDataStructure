// 异步加法
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 1000);
}

// 验证 sum
async function total() {
  const res1 = await sum(1, 3, 5);
  console.log(res1);
  return [res1];
}
console.log("total==", total());

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
      console.log("res==", result);
      asyncAdd(result[0], result[1], (err, sum) => {
        res(sum);
      });
    });
  });
}
