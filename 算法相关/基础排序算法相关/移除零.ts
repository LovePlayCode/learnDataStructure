/**
 Do not return anything, modify nums in-place instead.
 https://leetcode.cn/problems/move-zeroes/
 */
function moveZeroes(nums: number[]): void {
    let slow = 0
    let fast = 0
    const len = nums.length
    while (fast < len) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    // 当前slow是最后一个不为0元素的索引, 遍历将slow后面的元素设置为0
    while(slow < nums.length){
        nums[slow] = 0
        slow++
    }
};
export { }