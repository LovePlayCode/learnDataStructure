/**
 * 1. 首先判断 left和 right 是否为target 元素 如果是的话 那么返回[left,right]
 *
 *
 * 5,7,7,8,8,10
 * 2. 从中间开始找，如果找到了，那么先设置[mid,mid]
 *
 * @param nums
 * @param target
 */
function searchRange(nums: number[], target: number): number[] {
    if(nums.length === 0){
        return [-1,-1]
    }
    let firstIndex = searchLeft(nums,target)
    if(firstIndex === -1){
        return [-1,-1]
    }
    let sendIndex = searchRight(nums,target)
    return [firstIndex,sendIndex]

}
function searchLeft(nums,target){
    let left = 0
    let right = nums.length-1
    while (left < right){
        // if(){}
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] < target){
            // [mid+1,right]
            left = mid + 1
        }else{
            right = mid
        }
    }
    if(nums[left] === target){
        return left
    }
    return -1
}
function searchRight(nums,target){
    let left = 0
    let right = nums.length-1
    while (left < right){
        // if(){}
        let mid = left + Math.floor((right - left+1) / 2)
        if(nums[mid] > target){
            // [mid+1,right]
            right = mid - 1
        }else{
            left = mid
        }
    }
    return left
    // return -1
}

console.log(searchRange([1,2,3], 2));