function permute(nums: number[]): number[][] {
    const res: number[][] = []
    const numsLength = nums.length
    const dfs = (start)=>{
       if(start === numsLength){
        res.push([...nums])
        return 
       } 
       for(let i = start; i < numsLength; i++){
        [nums[start],nums[i]] = [nums[i],nums[start]];
        dfs(start+1);
        [nums[start],nums[i]] = [nums[i],nums[start]];
       }
    }
    dfs(0)
    return res
}
export {}