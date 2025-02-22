function Fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function loopFibonacci(n) {
  let before = 1;
  let after = 2;
  let res = 0;
  for (let i = 3; i < n; i++) {
    res = after + before;
    before = after;
    after = res;
  }
  return after;
}
const resData = loopFibonacci(10);
console.log(resData);
