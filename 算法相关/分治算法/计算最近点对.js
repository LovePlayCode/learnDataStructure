function closestPair(points) {
    // 计算两点之间的欧几里得距离
    function distance(p1, p2) {
        const dx = p1[0] - p2[0];
        const dy = p1[1] - p2[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    // 最近点对的主函数
    function closestPairRecursive(sortedByX, sortedByY) {
        const n = sortedByX.length;

        // 基础情况：少于等于 3 个点时，直接暴力计算最近点对
        if (n <= 3) {
            let minDist = Infinity;
            let pair = null;
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const d = distance(sortedByX[i], sortedByX[j]);
                    if (d < minDist) {
                        minDist = d;
                        pair = [sortedByX[i], sortedByX[j]];
                    }
                }
            }
            return { minDist, pair };
        }

        // 分治：分成左右两部分
        const mid = Math.floor(n / 2);
        const leftByX = sortedByX.slice(0, mid);
        const rightByX = sortedByX.slice(mid);

        const midX = sortedByX[mid][0];

        const leftByY = sortedByY.filter(p => p[0] <= midX);
        const rightByY = sortedByY.filter(p => p[0] > midX);

        const leftResult = closestPairRecursive(leftByX, leftByY);
        const rightResult = closestPairRecursive(rightByX, rightByY);

        // 获取左右部分的最小距离和对应点对
        let minDist = Math.min(leftResult.minDist, rightResult.minDist);
        let closestPair = leftResult.minDist < rightResult.minDist ? leftResult.pair : rightResult.pair;

        // 合并：检查跨越分界线的最近点对
        const strip = sortedByY.filter(p => Math.abs(p[0] - midX) < minDist);


        // 这里最多只会比较七次，因为字啊左右比较的过程中最小的是d,那么在左侧或右侧，距离只能是大于等于 d，不能小于 d。 所以最多 7 个点(等边三角形)
        for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < strip.length && (strip[j][1] - strip[i][1]) < minDist; j++) {
                const d = distance(strip[i], strip[j]);
                if (d < minDist) {
                    minDist = d;
                    closestPair = [strip[i], strip[j]];
                }
            }
        }

        return { minDist, pair: closestPair };
    }

    // 按 x 和 y 坐标排序点集
    const sortedByX = points.slice().sort((a, b) => a[0] - b[0]);
    const sortedByY = points.slice().sort((a, b) => a[1] - b[1]);

    return closestPairRecursive(sortedByX, sortedByY);
}

// 示例用法
const points = [
    [2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4]
];
const result = closestPair(points);
console.log('最近点对:', result.pair);
console.log('最近距离:', result.minDist);
