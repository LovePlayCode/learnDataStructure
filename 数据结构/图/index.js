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
