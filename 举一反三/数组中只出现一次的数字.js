function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}
console.log(singleNumber([4, 1, 2, 1, 2])); // 输出 4
