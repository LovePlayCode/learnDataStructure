// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })
console.log("Hello World!");
function fetch(api) {
  return new Promise((res) => {
    setTimeout(() => {
      res(api);
    }, Math.random() * 1000);
  });
}
class ConcurrencyRequest {
  arr = [];
  count = 0;
  constructor(size) {
    this.size = size;
  }

  request(api) {
    return new Promise((res, rejt) => {
      const task = (api, res) => {
        if (this.arr.length > 0) {
          const first = this.arr.shift();
          fetch(first.url).then((data) => {
            task();
            first.res(data);
          });
        }
      };

      if (this.count < this.size) {
        this.count++;
        fetch(api).then((data) => {
          this.count--;
          task();
          return res(data);
        });
      } else {
        this.arr.push({
          url: api,
          res,
        });
      }
    });
  }
}
const myFetch = new ConcurrencyRequest(2);
myFetch.request("api1").then((res) => {
  console.log(res);
});
myFetch.request("api2").then((res) => {
  console.log(res);
});
myFetch.request("api3").then((res) => {
  console.log(res);
});
myFetch.request("api5").then((res) => {
  console.log(res);
});
myFetch.request("api6").then((res) => {
  console.log(res);
});
