function main(str) {
  if (typeof str !== "string") {
    throw new TypeError("str 类型错误");
  }
  // 新建一个 map
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) {
      const val = map.get(char);
      map.set(char, val + 1);
    } else {
      map.set(char, 1);
    }
    const val = map.get(char);
    if (val === 2) {
      console.log(map, char);
      return char;
    }
  }
  return "";
}
const res = main("abccbaacz");
console.log(res);
