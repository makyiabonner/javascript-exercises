const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function() {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(a,b) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function() {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
