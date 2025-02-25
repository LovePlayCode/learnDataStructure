function numTilePossibilities(tiles: string): number {
    let res = 0
    const len = tiles.length
    const vis = new Array(len).fill(false)
    tiles = tiles.split('').sort().join('')
    const dfs= ()=>{
      
        for(let i =0; i < len; i++){
            if(vis[i]){
                 continue;
            }
            if(i > 0 && tiles[i] === tiles[i-1] && !vis[i-1]){
                 continue;
            }
            if(!vis[i]){
                res++
                vis[i] = true
                dfs()
                vis[i] = false
            }
            
        }
    }
    dfs()
    return res
};
export {}