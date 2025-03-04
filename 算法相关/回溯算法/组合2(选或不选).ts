
/**
 * 
 * @param candidates 
 * @param target 
 * @returns 
 * 思路：选或不选。
 * 注意：去重的逻辑，这里有点绕，建立画图查看，画了图就非常清晰了。
 * 参考：https://leetcode.cn/problems/combination-sum-ii/solutions/407850/zu-he-zong-he-ii-by-leetcode-solution/
 */
function combinationSum2(candidates: number[], target: number): number[][] {
    // 用于保存数字以及对应的个数
    const freq: [number,number][] = []
    // 排序
    candidates.sort((a,b)=>a-b)
    for(let item of candidates){
        if(freq.length ===0 || item !== freq[freq.length-1][0]){
            freq.push([item,1])
        }else{
            freq[freq.length-1][1]++
        }
    }
    const res: number[][] = []
    const dfs = (pos,rest,state: number[])=>{
        if(rest === 0){
            res.push([...state])
            return
        }
        // 如果整个数组遍历完了，或者超过了当前值，直接退出，因为数组是排过序的。
        if (pos === freq.length || rest < freq[pos][0]) {
            return;
        }
        // 不选
        dfs(pos+1,rest,state)
        // 选，需要去重
        const most = Math.min(Math.floor(rest / freq[pos][0]),freq[pos][1])
        for(let i = 1; i <= most; i++){
            state.push(freq[pos][0])
        
            dfs(pos+1,rest - (i * freq[pos][0]),state)
        }
        // 回溯，将元素清空，不能写到上面的循环里，因为上面的循环需要一直累加，最后才能依次 pop
        for(let i =1; i <= most; i++){
            state.pop()
        }
    }
    dfs(0,target,[])
    return res
};
export {}