function climbStairs(n: number): number {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

export {};
