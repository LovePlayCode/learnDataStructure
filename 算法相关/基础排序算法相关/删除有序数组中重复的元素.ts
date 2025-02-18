
/**
 * 
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */
function removeDuplicates(nums: number[]): number {
    let left = 0
    const len = nums.length
    let right = 0
    while(right < len){
        if(nums[left]!==nums[right]){
            left++
            nums[left] = nums[right]
        }
        right++
    }
    return left + 1
};