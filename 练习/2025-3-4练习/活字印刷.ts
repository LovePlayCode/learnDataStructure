function numTilePossibilities(tiles: string): number {
    const map = new Map()
    for(const char of tiles){
        map.set(char,(map.get(char)||0)+1)
    }
    // 去重
    const set = new Set(tiles)
    const len = tiles.length
    const dfs= (i)=>{
        if(i === len){
            return 1
        }
        // 因为不是全排列也算，所以默认会有 1 次，但是会多加一次，所以后续要-1
        let res = 1
        for(const char of set){
            if(map.get(char)>0){
                map.set(char,(map.get(char)||0)-1)
                res+=dfs(i+1)
                map.set(char,(map.get(char)||0)+1)
            }
        }
        return res
    }
    return dfs(0) - 1
};

export {}