const sumAll = function(num1 = 0, num2 = 0) {
    if(
        !Number.isInteger(num1) || 
        !Number.isInteger(num2) || 
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        num1 < 0 ||
        num2 < 0){
        return 'ERROR'
    }
    else{
        let sum = 0;
        const largestNum = Math.max(num1,num2);
        const smallestNum = Math.min(num1,num2);

        for(let int = smallestNum; int <= largestNum; int++){
            sum += int;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
