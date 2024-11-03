/**
 * 爬楼梯
 */

function backTrack(state,res,nums,start,target){
    if(target === 0){
        res.push([...state])
    }
    for(let i = 0;i<nums.length;i++){
        if(target - nums[i] < 0){
            break
        }
        state.push(nums[i])
        backTrack(state,res,nums,i,target - nums[i])
        state.pop()
    }
}

function main(target){
    const arr = [1,2]
    const res = []
    backTrack([],res,arr,0,target)
    return res
}
const res = main(3)
console.log('res==',res)