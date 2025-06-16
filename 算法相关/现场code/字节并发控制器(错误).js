// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })
console.log("Hello World!");
function fetch(api) {}
class ConcurrencyRequest {
  constructor(size) {
    this.size = size;
  }

  request(api) {}
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
