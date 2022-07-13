const removeFromArray = function (inputArray, ...toRemove) {
  let index = inputArray.indexOf(...toRemove);
  inputArray.splice(index, 1);
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
