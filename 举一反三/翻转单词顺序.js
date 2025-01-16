function reverseSentence(sentence) {
  let words = sentence.trim().split(/\s+/); // 按多个空格拆分

  words.reverse(); // 反转单词顺序

  return words.join(" "); // 重新组合句子
}

// 测试
console.log(reverseSentence("I am    a  student.")); // 输出: "student. a Iam"
