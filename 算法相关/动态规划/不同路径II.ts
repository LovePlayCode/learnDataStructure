function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    // 设dp[i][j] 为机器人能到i,j 的路径
    // 状态转移:
    //1. 从上面过来
    //2. 从右边过来
    // 取两者的相加值
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(item=>{
        return new Array(n).fill(0)
    })
    for(let i = 0; i < m; i++){
        if(obstacleGrid[i][0] === 1){
            
            // 如果位置有障碍物了，后面的元素也没法触达了，所以直接赋值为 0
            while(i < m){
                dp[i][0] = 0
                i++
            }
            break
        }else{
            dp[i][0] = 1
        }
    }
    for(let j = 0; j < n; j++){
        if(obstacleGrid[0][j] === 1){
            // 同理
            while(j < n){
                 dp[0][j] = 0
                 j++
            }
            break 
        }else{
            dp[0][j] = 1
        }
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0
            }else{
                // 如果左边和上边都有障碍物,则为 0
                if(obstacleGrid[i][j-1]===1 && obstacleGrid[i-1][j] === 1){
                    dp[i][j] = 0
                }else if (obstacleGrid[i][j-1]===1){
                    dp[i][j] = dp[i-1][j]
                }else if (obstacleGrid[i-1][j]===1){
                    dp[i][j] = dp[i][j-1]
                }else{
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]
                }
            }
            
        }
    }
    return dp[m-1][n-1]
};
export {}