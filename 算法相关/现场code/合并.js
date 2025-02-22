/**
 * [{x:1},{y:2},{z:3}]
 * @param {object[]} arr
 */
function main(arr) {
  return arr.reduce((pre, cur) => {
    return {
      ...cur,
      ...pre,
    };
  }, {});
}

console.log(main([{ x: 1 }, { y: 2 }, { z: 3, x: 2 }]));
