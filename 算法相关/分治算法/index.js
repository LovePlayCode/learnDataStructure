/**
 * 给定一个长度为 𝑛 的有序数组 nums ，其中所有元素都是唯一的，请查找元素 target 。
 * @param {number[]} nums 
 * @param {number} target 
 */
function binarySearch(nums,target){
    const length = nums.length-1
    const dfs = (i,j)=>{
        if(i > j){
            return 
        }
        const mid = Math.floor(i + (j - i ) /2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] < target){
            return dfs(mid+1,j)
        }
        return dfs(i,mid-1)
    }
    return dfs(0,length)
}
console.log(binarySearch([1,2,3,4],0))
