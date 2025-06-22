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

  // 做异步的并发控制
  request(api) {}
}

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
