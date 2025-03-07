function minimumTotal(triangle: number[][]) {

    const len = triangle.length
    // 通过记忆化搜索解决重复子问题
    const memo = {}
    function findMinPath(i, j) {
        const memoKey = `${i}_${j}`
        // 如果找到最后一个，直接返回 i,j即可。
        if(i ===len-1 ){
            return triangle[i][j]
        }
        if(memo[memoKey] !== undefined){
            return memo[memoKey]
        }
        const leftPath = findMinPath(i+1,j)
        const rightPath = findMinPath(i+1,j+1)
        // 当前的值 + 处理后的最小值
        const res = triangle[i][j] + Math.min(leftPath,rightPath)
        memo[memoKey] = res
        return res
    }
    return findMinPath(0,0)
}

export {}