function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = []
    const numsLength = nums.length;
    // 排序
    nums.sort((a, b) => a - b)
    console.log(nums)
    const dfs = (start: number) => {

        if (start === numsLength) {
            res.push([...nums])
            return
        }
        // 因为要交换位置，所以需要一个 set 数组来记录哪些被选择了
        const used = new Set()
        for (let i = start; i < numsLength; i++) {
           if (used.has(nums[i])) continue; // 重复数字跳过
             used.add(nums[i]);
            [nums[start], nums[i]] = [nums[i], nums[start]];
            dfs(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    dfs(0)
    return res
};

export { }