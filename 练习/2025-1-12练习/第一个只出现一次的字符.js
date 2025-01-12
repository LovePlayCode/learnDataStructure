function main(str) {
  const map = new Map();
  for (let char of str) {
    if (map.has(char)) {
      const val = map.get(char);
      map.set(char, val + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let char of str) {
    if (map.has(char) && map.get(char) === 1) {
      return char;
    }
  }
}

const res = main("abaccdeff");
console.log(res);
