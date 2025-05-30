// 123456789, ---> 123,456,789
// 1234
function transformMoney(str) {
  let resultStr = "";
  const len = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      resultStr += `,${str[len - i]}`;
    } else {
      resultStr += str[len - i];
    }
  }

  return resultStr.split("").reverse().join("");
}

console.log(transformMoney("1234"));

// 1 3 7 2 4 5 6

console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
var promise = new Promise(function (resolve, reject) {
  console.log(3);
  setTimeout(function () {
    console.log(4);
    resolve();
  }, 1000);
});
promise.then(function () {
  console.log(5);
  setTimeout(function () {
    console.log(6);
  }, 0);
});
console.log(7);
