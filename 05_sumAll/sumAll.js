const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let sumTotal = 0;
  if (b > a) {
    for (let i = 0; i <= Math.abs(a - b); i++) {
      let newAdd = a + i;
      sumTotal += newAdd;
    }
    return sumTotal;
  }
  if (a > b) {
    for (let i = 0; i <= Math.abs(a - b); i++) {
      let newAdd = b + i;
      sumTotal += newAdd;
    }
  }
  return sumTotal;
};
// Do not edit below this line
module.exports = sumAll;
