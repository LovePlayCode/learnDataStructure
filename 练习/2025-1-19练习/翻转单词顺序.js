/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，
 * 标点符号和普通字母一样处理。例如输入字符串"Iam a student. ”，则输出"'student.a am I"。”
 */
function reverseSentence(sentence) {
  let words = sentence.trim().split(/\s+/); // 按多个空格拆分

  words.reverse(); // 反转单词顺序

  return words.join(" "); // 重新组合句子
}

// 测试
console.log(reverseSentence("I am    a  student.")); // 输出: "student. a Iam"
