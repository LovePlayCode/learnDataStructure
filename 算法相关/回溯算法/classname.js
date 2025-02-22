function classnames(...args) {
  let resData = "";
  const dfs = (obj) => {
    let res = "";
    if (typeof obj === "string") {
      res += ` ${obj}`;
    }
    if (Array.isArray(obj)) {
      for (let item of obj) {
        res += ` ${dfs(item)}`;
      }
    }
    if (obj !== null && typeof obj === "object") {
      const keys = Object.keys(obj);
      for (const key of keys) {
        if (obj[key] === true) {
          res += ` ${key}`;
        }
      }
    }
    return res;
  };
  for (let data of args) {
    resData += ` ${dfs(data)}`;
  }
  return resData;
}

const res = classnames("class1", ["class2", { class3: true }]);
console.log("res==", res);
