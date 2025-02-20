function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    
    function backtrack(start: number): void {
        if (start === nums.length) {
            res.push([...nums]); // 存储当前排列 return;
        }
        
        const used = new Set<number>(); // 记录当前层已使用的数字
        for (let i = start; i < nums.length; i++) {
            // 已经选过的，当前层就不需要选了，直接跳过即可。
            if (used.has(nums[i])) continue; // 重复数字跳过
            
            used.add(nums[i]);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // 交换
            backtrack(start + 1); // 递归下一层
            [nums[start], nums[i]] = [nums[i], nums[start]]; // 回溯
        }
    }
    
    backtrack(0);
    return res;
}
// 测试示例
console.log(permuteUnique([1, 1, 2]));
export {}