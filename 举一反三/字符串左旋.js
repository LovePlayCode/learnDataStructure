function leftRotateString(str, n) {
  // 如果字符串为空或旋转位数为0，直接返回原字符串
  if (str.length === 0 || n === 0) {
    return str;
  }

  // 处理旋转位数大于字符串长度的情况
  n = n % str.length;

  // 将前 n 个字符提取出来，再加上剩余的部分
  return str.slice(n) + str.slice(0, n);
}

// 测试
console.log(leftRotateString("abcdefg", 2)); // 输出: "cdefgab"
console.log(leftRotateString("abcdefg", 8)); // 输出: "abcdefg" (n大于字符串长度，结果相同)
console.log(leftRotateString("abcdefg", 0)); // 输出: "abcdefg" (旋转0次，结果相同)
console.log(leftRotateString("abcdefg", 7)); // 输出: "abcdefg" (n等于字符串长度，结果相同)
