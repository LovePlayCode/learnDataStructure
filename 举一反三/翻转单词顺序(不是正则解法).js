function reverseSentence(sentence) {
  let words = [];
  let currentWords = "";
  for (let char of sentence) {
    if (char === " ") {
      if (currentWords.length > 0) {
        words.push(currentWords);
        currentWords = "";
      }
    } else {
      currentWords += char;
    }
  }
  if (currentWords.length) {
    words.push(currentWords);
  }
  console.log(words);
  return words.reverse().join(" ");
}

// 测试
console.log(reverseSentence("I am    a  student.")); // 输出: "student. a Iam"
