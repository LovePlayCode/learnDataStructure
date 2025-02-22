function exchange(A, B) {
  const A1 = A + B;
  // B
  const A2 = A1 - B;
  // A 已经被交换了
  const A3 = A1 - A2;
  return [A2, A3];
}

const A = 20;
const B = 30;

const res = exchange(20, 30);
console.log("res==", res);
