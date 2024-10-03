/**
 * 
 * 
 * 
给定一个长度为 𝑛 的有序数组 nums 和一个元素 target ，数组不存在重复元素。现将 target 插入数 组 nums 中，
并保持其有序性。若数组中已存在元素 target ，则插入到其左方。请返回插入后 target 在数组中的索引。
 */
function binarySearchInsertionSimple(nums: number[], target: number) {
    let leftIndex = 0
    let rightIndex = nums.length-1
    while(leftIndex <= rightIndex){
        const m = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
        // 说明找到了目标元素，插入指定位置即可。
        if(nums[m] === target){
            nums.splice(m,0,target)
            return
        }
        if(nums[m] < target){
            rightIndex = m-1
        }else{
            leftIndex = m+1
        }
    }
    // return leftIndex
    nums.splice(leftIndex,0,target)
}
const nums = [1,2,3,4]
binarySearchInsertionSimple(nums,2)
console.log(nums)