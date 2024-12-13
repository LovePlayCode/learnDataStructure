let maxV = Number.MIN_VALUE;

function f(i, cw, items, n, w, values, cv) {
  if (cw == w || i == n) {
    if (cv > maxV) {
      maxV = cv;
    }
    return;
  }

  f(i + 1, cw, items, n, w);

  if (cw + items[i] <= w) {
    f(i + 1, cw + items[i], items, n, w, cv + values[i]);
  }
}
