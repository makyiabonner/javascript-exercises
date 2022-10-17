const sumAll = function(startArr, endArr) {
if (startArr < 0 || endArr < 0) return "ERROR";
if (!Number.isInteger(startArr) || !Number.isInteger(endArr)) return "ERROR";
    let sum = 0;
for(i = startArr; i <= endArr; i++){
    sum+= i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
