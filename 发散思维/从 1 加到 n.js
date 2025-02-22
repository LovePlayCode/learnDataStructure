function sum(n) {
  if (n === 1 || n == 0) {
    return n;
  }
  return n + sum(n - 1);
}

const numberSum = sum(10);
console.log(numberSum);
