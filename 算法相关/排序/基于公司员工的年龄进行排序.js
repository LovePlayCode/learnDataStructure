function SortAges(ages, length) {
  if (ages === null || length <= 0) {
    return;
  }
  const oldestAge = 99;

  const timesOfAge = new Array(oldestAge + 1).fill(0);

  for (let i = 0; i < length; i++) {
    const age = ages[i];
    if (age < 0 || age > oldestAge) {
      throw new Error("超出年龄范围");
    }

    // 数组里存放的其实是每个年龄段有多少人
    ++timesOfAge[age];
  }

  let index = 0;
  for (let i = 0; i <= oldestAge; i++) {
    for (let j = 0; j < timesOfAge[i]; j++) {
      ages[index] = i;
      index++;
    }
  }
}
