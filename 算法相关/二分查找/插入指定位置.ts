/**
 * 
 * 
 * 
给定一个长度为 𝑛 的有序数组 nums 和一个元素 target ，数组不存在重复元素。现将 target 插入数 组 nums 中，
并保持其有序性。若数组中已存在元素 target ，则插入到其左方。请返回插入后 target 在数组中的索引。
 */


/**
 * 不存在重复元素
 * @param nums 
 * @param target 
 * @returns 
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
            leftIndex = m+1
           
        }else{
            rightIndex = m-1
        }
    }
    // return leftIndex
    nums.splice(leftIndex,0,target)
}
const nums = [1,2,2,3,4]
binarySearchInsertionSimple(nums,0)

/**
 * 解法 2  有重复元素的存在
 */

function binarySearchInsertion(nums: number[],target: number){
    let i = 0
    let j = nums.length-1
    while(i<=j){
        const mid = Math.floor(i+(j-i)/2)
        if(nums[mid] < target){
            i = mid+1
        }else if(nums[mid] > target){
            j = mid - 1
        }else{
            j = j-1
            if(nums[j] === target){
                return j
            }
        }
    }
    return i
}

console.log('数据为',binarySearchInsertion([1, 2, 2,2, 3,3, 4], 3));