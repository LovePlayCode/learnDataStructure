
/**
 * 找到数组中 target 的左边界，需要判断边界情况，因为 target 不是必然存在的。 
 * @param nums 
 * @param target 
 * @returns 
 */
function binarySearchLeftEdge(nums: number[],target: number){
    const index = binarySearchInsertion(nums,target)
    if(index >= nums.length || nums[target] !== target){
        return -1
    }
    return index
}