/**
 *
 * @param {any[]} fnArr
 */
function componse(fnArr) {
  return (...args) => {
    return fnArr.reduce((pre, cur) => {
      const result = cur(pre);
      return result;
    }, args);
  };
}
const resData = componse([
  (name) => {
    return name;
  },
  (name) => {
    return name + ":::";
  },
  (nameo) => {
    return nameo + "lllll";
  },
]);
console.log(resData("lhl"));
