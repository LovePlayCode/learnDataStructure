
/**
 * 找到数组中 target 的右边界
 * 1. 找一个数的右边界， 相当于找一个数+1的左边界 
 * @param nums 
 * @param target 
 * @returns 
 */
function binarySearchRightEdge(nums: number[],target: number){
    const index = binarySearchInsertion(nums,target + 1)
    // if(index >= nums.length || nums[target] !== target){
    //     return -1
    // }
    const j = index - 1
    if(j === -1 || nums[j] !== target){
        return -1
    }
    return j
    // return index
}