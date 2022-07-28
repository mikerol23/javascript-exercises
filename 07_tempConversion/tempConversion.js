const ftoc = function (f) {
  let c = Math.round((f - 32) * (5 / 9) * 10) / 10;
  return c;
};

const ctof = function () {};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
