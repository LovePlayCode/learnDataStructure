[1, 2, 3].reduce((a, b, c, d, e) => {
  console.log("aaaa====", a, b, c, d, e);
}, undefined);
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;
  let accumulator;
  let startIndex;

  if (arguments.length >= 2) {
    // 用户传了 initialValue，无论是啥值
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // 没有传 initialValue
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};

[1, 2, 3].myReduce((a, b, c, d, e) => {
  console.log("aaaamyReduce====", a, b, c, d, e);
}, undefined);

// 高德有戏啊，哈哈哈
