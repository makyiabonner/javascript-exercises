const repeatString = function (str, num) {
  if (num < 0) return "ERROR";
  else {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    const repeatedString = arr.join("");
    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
