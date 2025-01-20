/**
 * @param {number} len
 * @param {number[]} nums
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2~10为数字本身，
 * A为1，J为11，0为12,K为13，而大、小王可以看成任意数字。”
 */
function Iscountinuous(nums, len) {
  if (!Array.isArray(nums)) {
    return false;
  }
  // 先进行排序
  nums.sort((a, b) => a - b);
  // 统计 0 的次数
  let count = 0;
  let index = 0;
  while (index < len && nums[index] === 0) {
    count++;
  }

  // 统计间隔
  let small = 0;
  let big = 1;
  let numberOfGap = 0;
  while (small < big && big < len) {
    if (nums[small] === nums[big]) {
      return false;
    }
    numberOfGap += nums[big] - nums[small] - 1;
    small = big;
    big++;
  }
  return count >= numberOfGap ? true : false;
}
