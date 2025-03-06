function numSquares(n) {
    // 记忆化存储
    const memo = new Map();

    // 辅助函数：计算和为 n 的完全平方数的最少数量
    function helper(remaining) {
        // 如果剩余值为 0，返回 0
        if (remaining === 0) return 0;
        // 如果剩余值为负数，返回正无穷大（表示不可能）
        if (remaining < 0) return Infinity;
        // 如果已经计算过，直接返回存储的结果
        if (memo.has(remaining)) return memo.get(remaining);

        let minCount = Infinity;
        // 尝试使用 1^2, 2^2, ..., sqrt(remaining)^2
        for (let i = 1; i * i <= remaining; i++) {
            const count = 1 + helper(remaining - i * i);
            minCount = Math.min(minCount, count);
        }

        // 存储计算结果
        memo.set(remaining, minCount);
        return minCount;
    }

    // 调用辅助函数并返回结果
    return helper(n);
}

// 示例测试
console.log(numSquares(12)); // 输出：3
console.log(numSquares(13)); // 输出：2
export {}