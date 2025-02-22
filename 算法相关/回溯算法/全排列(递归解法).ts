function permute(nums) {
    if (nums.length === 0) return [[]]; // 终止条件：空数组的唯一排列是空排列
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]; // 当前选中的元素
        const remaining = nums.filter((_, idx) => idx !== i); // 剩余元素组成的数组
        const permutations = permute(remaining); // 递归获取剩余元素的全排列
        
        // 将当前元素与子问题的解组合
        for (const p of permutations) {
            result.push([current, ...p]);
        }
    }
    return result;
}

export {} 