function exchange(A, B) {
  A = A ^ B;
  B = A ^ B;
  A = A ^ B;
  return [A, B];
}

const A = 20;
const B = 30;

const res = exchange(20, 30);
console.log("res==", res);
