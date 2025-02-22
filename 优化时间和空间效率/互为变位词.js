function MutualInflectionalWords(str1, str2) {
  const map = new Map();
  for (let char of str1) {
    // set.push(char);
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let char of str2) {
    if (map.has(char)) {
      const resVal = map.get(char) - 1;
      if (resVal <= 0) {
        map.delete(char);
      } else {
        map.set(char, map.get(char) - 1);
      }
    } else {
      return false;
    }
  }
  return map.size === 0 ? true : false;
}

const falg = MutualInflectionalWords("evi2l", "live");
console.log(falg);
