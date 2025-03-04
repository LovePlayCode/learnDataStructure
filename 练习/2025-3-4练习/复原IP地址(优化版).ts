function restoreIpAddresses(s: string): string[] {
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT);
    const ans: string[] = [];
    const dfs = (segId, segStart) => {
      if (segId === SEG_COUNT) {
        // 说明满足要求
        if (segStart === s.length) {
          ans.push(segments.join("."));
        }
        return;
      }
  
      // 如果还没找到 4 段 IP地址就已经遍历完了字符串，就提前结束回溯。
      if (segStart === s.length) {
        return;
      }
  
      if (s[segStart] === "0") {
        segments[segId] = "0";
        dfs(segId + 1, segStart + 1);
        return;
      }
      let addr = 0;
      for (let segEnd = segStart; segEnd < s.length; segEnd++) {
        addr = addr * 10 + (s[segEnd].charCodeAt(0) - "0".charCodeAt(0));
        if (addr > 0 && addr <= 0xff) {
          segments[segId] = addr;
          dfs(segId + 1, segEnd + 1);
        } else {
          break;
        }
      }
    };
  
    dfs(0, 0);
    return ans;
  }
  
  export {};