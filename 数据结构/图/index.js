class Graph {
  constructor(vertices) {
    this.vertices = vertices; // 顶点数
    this.adj = Array.from({ length: vertices }, () => []); // 邻接表
  }

  addEdge(s, t) {
    this.adj[s].push(t);
    this.adj[t].push(s); // 假设是无向图
  }

  bfs(s, t) {
    if (s === t) return;

    const visited = Array(this.vertices).fill(false); // 记录是否访问过
    visited[s] = true;

    const queue = []; // 队列
    queue.push(s);

    const prev = Array(this.vertices).fill(-1); // 记录路径

    while (queue.length !== 0) {
      const w = queue.shift(); // 取队首

      for (let i = 0; i < this.adj[w].length; i++) {
        const q = this.adj[w][i];

        if (!visited[q]) {
          prev[q] = w; // 记录路径

          if (q === t) {
            console.log("数据", prev);
            this.print(prev, s, t); // 打印路径
            return;
          }
          visited[q] = true;

          // 队列 先进先出
          queue.push(q);
        }
      }
    }
  }

  print(prev, s, t) {
    if (prev[t] !== -1 && t !== s) {
      this.print(prev, s, prev[t]); // 递归打印路径
    }
    process.stdout.write(t + " "); // 打印当前节点
  }

  //  递推公式 设 recurDfs(w) 为从节点w 开始执行深度优先搜索
  // 如果 w = t 或者 found = true 停止递归
  // 标记访问的节点 w， 判断当前节点是否访问过， 如果没有，则赋值 prev，继续进行递归。
  dfs(s, t) {
    // 有一个内部函数用来递归，终止条件是找到 t 或者 w === t 结束递归
    // 1. 遍历数组递归即可。
    // 2. 遍历的是二维数组中每个一维数组，通过遍历一维数组找到答案。
    let found = false;
    const visited = new Array(this.vertices).fill(false);
    const prev = new Array(this.vertices).fill(-1);
    function recurDfs(w, t, adj) {
      if (found === true) {
        return;
      }
      visited[w] = true;
      if (w === t) {
        found = true;
        return;
      }
      for (let i = 0; i < adj[w].length; i++) {
        if (!visited) {
          const cur = adj[w][i];
          prev[cur] = w;
          recurDfs(cur, t, adj);
        }
      }
    }
    recurDfs(s, t, this.adj);
  }
}

// 示例用法
const g = new Graph(8);
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(2, 5);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(4, 6);
g.addEdge(5, 7);
g.addEdge(6, 7);
console.log(g.adj);
console.log("从 0 到 7 的路径为：");
g.bfs(0, 7);
