function printPermutations(data, length, k) {
  if (k === 1) {
    let str = "";
    for (let i = 0; i < length; i++) {
      str = str + " " + data[i];
    }
    console.log(str);
  }
  for (let i = 0; i < k; i++) {
    let temp = data[i];
    data[i] = data[k - 1];
    data[k - 1] = temp;
    printPermutations(data, length, k - 1);
    temp = data[i];
    data[i] = data[k - 1];
    data[k - 1] = temp;
  }
}

printPermutations([1, 2, 3], 3, 3);
