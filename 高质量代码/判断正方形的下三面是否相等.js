function isZhenSan(nums) {
  const len = nums.length;
  const isSelect = new Array(len).fill(false);
  const res = [];
  recursion(nums, [], len, isSelect, res);
  let sum = 0;
  for (let arr of res) {
    const [A, B, C, D, E, F, G, H] = arr;
    if (
      A + B + C + D === E + F + G + H &&
      A + D + E + H === B + C + F + G &&
      A + B + F + E === C + D + G + H
    ) {
      sum++;
    }
  }
  return sum;
}

/**
 *
 * @param {number[]} nums
 * @param {number[]} state
 * @param {number} len
 * @param {boolean[]} isSelect
 */
function recursion(nums, state, len, isSelect, result) {
  if (state.length === len) {
    result.push([...state]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!isSelect[i]) {
      state.push(nums[i]);
      isSelect[i] = true;
      recursion(nums, state, len, isSelect, result);
      state.pop();
      isSelect[i] = false;
    }
  }
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const res = isZhenSan(nums);
console.log(res);
