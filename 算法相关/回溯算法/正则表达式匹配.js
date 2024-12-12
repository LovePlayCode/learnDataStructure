class Pattern {
  matched = false;
  pattern;
  plen;
  constructor(pattern, plen) {
    this.pattern = pattern;
    this.plen = plen;
  }
  match(text, tlen) {
    this.matched = false;
    rmatch(0, 0, text, tlen);
    return this.matched;
  }
  rmatch(ti, pj, text, tlen) {
    if (this.matched) {
      return;
    }
    if (pj === this.plen && ti === tlen) {
      this.matched = true;
      return;
    }

    if (this.pattern[pj] === "*") {
      for (let k = 0; k <= tlen - ti; k++) {
        this.rmatch(ti + k, pj + 1, text, tlen);
      }
    } else if (this.pattern[pj] === "?") {
      // 匹配 0个 或 1 个
      this.rmatch(ti, pj + 1, text, tlen);
      this.rmatch(ti + 1, pj + 1, text, tlen);
    } else if (ti < tlen && this.pattern[pj] === this.pattern[ti]) {
      this.rmatch(ti + 1, pj + 1, text, tlen);
    }
  }
}
