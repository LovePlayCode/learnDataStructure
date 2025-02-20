
/**
 * 
 * 子集
 * leetcode: https://leetcode.cn/problems/subsets/
 */
function subsets(nums: number[]): number[][] {
    const len = nums.length
    const res: number[][] = []
    const dfs = (start,subset)=>{
        res.push([...subset])
        for(let i = start; i < len; i++){
            subset.push(nums[i])
            dfs(i+1,subset)
            subset.pop() 
        }
    }
    dfs(0,[])
    return res
};

export {}