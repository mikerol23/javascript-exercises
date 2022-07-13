const removeFromArray = function (inputArray, ...toRemove) {
  for (i = 0; i < arguments.length; ++i) {
    let index = inputArray.indexOf(arguments[i]);
    if (index > -1) {
      inputArray.splice(index, 1);
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
