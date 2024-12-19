function sumRecursion(n) {
  return n < 0 ? 0 : n + sumRecursion(n - 1);
}

const sum = sumRecursion(100);
console.log("求和值为::", sum);
