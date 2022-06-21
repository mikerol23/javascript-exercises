const reverseString = function (inputString) {
  let splitInput = inputString.split("");
  let reverseArray = splitInput.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
