function main(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return main(n - 1) + main(n - 2);
}

const res = main(44);
console.log("res==", res);
