/**
 * 给定一个正整数数组 nums 和一个目标正整数 target ，请找出所有可能的组合，使得组合中的元素和等于 target 。
 * 给定数组可能包含重复元素，每个元素只可被选择一次。请以列表形式返回这些组合，列表中不应包含重复组合。
 * 
 * */
function backTrack(state,target,res,start,nums){
  
    if(target === 0){
        res.push([...state])
        return
    }
    for(let i = start; i < nums.length;i++){
        if(target - nums[i] < 0){
            break
        }
        if(nums[i] === nums[i-1]){
            continue
        }
        // 尝试选择
        state.push(nums[i])
        // 回溯
        backTrack(state,target - nums[i],res,i+1,nums)
        // 回退
        state.pop()
    }
}



/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
function main(nums,target){
    /**
     * 1. 定义 state，保存子集
     * 2. 对 num 进行排序，可以更方便剪枝
     * 3. 定义一个start，标识开始位置。 不能选择重复的元素，意味着每次循环要从 start+1 开始
     * 4. const res // 定义一个结果数组
     * 5. 回溯算法
     * 6. 用 target === 0 表示是否达成选择条件
     * 7. 将 i 定义为当前的选择，如果当前的选择和 i-1 的选择一致，说明是一样的，直接跳过即可。
     */
    const state = []
    nums.sort((a,b)=> a - b)
    const start = 0
    const res = []
    backTrack(state,target,res,start,nums)
    return res

}
const res = main([4,3,2,4,5],9)
console.log('res==',res)