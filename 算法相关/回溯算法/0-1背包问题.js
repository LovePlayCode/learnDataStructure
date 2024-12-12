let maxW = Number.MIN_VALUE;

function f(i, cw, items, n, w) {
  if (cw == w || i == n) {
    if (cw > maxW) {
      maxW = cw;
    }
    return;
  }

  f(i + 1, cw, items, n, w);

  if (cw + items[i] <= w) {
    f(i + 1, cw + items[i], items, n, w);
  }
}
