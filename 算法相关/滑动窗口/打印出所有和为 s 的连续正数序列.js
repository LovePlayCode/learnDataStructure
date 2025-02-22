function findContinuousSequence(s) {
  let start = 1;
  let end = 2;
  let sum = 3;
  while (start <= s >> 1) {
    sum = 0;
    let res = [];
    for (let i = start; i <= end; i++) {
      sum += i;
      res.push(i);
    }

    if (sum === s) {
      console.log(res.join(""));
      end++;
    } else if (sum < s) {
      end++;
    } else {
      start++;
    }
  }
}

// 测试
findContinuousSequence(15); // 输出：1 2 3 4 5  4 5 6  7 8
