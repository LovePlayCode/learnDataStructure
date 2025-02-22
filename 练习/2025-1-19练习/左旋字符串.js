/**
 *
 * @param {string} s
 * @param {number} len
 */
function main(s, len) {
  if (len === 0) {
    return s;
  }
  const strLen = s.length;
  const n = len % strLen;
  return s.slice(n) + s.slice(0, n);
}
// 测试
console.log(main("abcdefg", 2)); // 输出: "cdefgab"
console.log(main("abcdefg", 8)); // 输出: "bcdefga" (n大于字符串长度，结果相同)
console.log(main("abcdefg", 0)); // 输出: "abcdefg" (旋转0次，结果相同)
console.log(main("abcdefg", 7)); // 输出: "abcdefg" (n等于字符串长度，结果相同)
