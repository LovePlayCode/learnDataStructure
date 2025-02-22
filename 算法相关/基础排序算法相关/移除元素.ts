
/**
 * 移除元素
 * https://leetcode.cn/problems/remove-element/description/
 */
function removeElement(nums: number[], val: number): number {
    let slow = 0
    let fast = 0
    const len = nums.length
    while(fast < len ){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};


export {}