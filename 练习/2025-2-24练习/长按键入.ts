function isLongPressedName(name: string, typed: string): boolean {
  const n = name.length;
  const tLen = typed.length;
  let i = 0;
  let j = 0;
  while (j < tLen) {
    if (i < n && name[j] === name[i]) {
      i++;
      j++;
    } else if (j < tLen && name[j] === name[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  return i === n;
}
export {};
