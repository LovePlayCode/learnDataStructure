function sum(n) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return n;
  }
  return n + sum(n - 1);
}

const result = sum(55);
console.log(result);
