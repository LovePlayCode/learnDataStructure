/**
 * 
 * 1. 判断区间，如果区间为空，返回 -1
 * 2. 算出 mid  
 * 3. 如果 nums[mid] < target, 那么说明在右边， 往右找
 * 4. 如果 nums[mid] > target 说明在左边，往左找
 * 5. 除此之外，说明找到了，return当前索引
 */
function twoSearch(nums,i,j,target){
    if(i > j){
        return -1
    }
    const mid = i + Math.floor((j - i ) / 2);
    if(nums[mid] < target){
        return twoSearch(nums,mid+1,j,target)
    }
    if(nums[mid] > target){
        return twoSearch(nums,i,mid-1,target)
    }
    return mid
}
const res = twoSearch([1,2,5,100,300],0,4,100)
console.log('res==',res)