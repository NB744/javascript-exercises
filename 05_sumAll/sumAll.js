const sumAll = function(num1, num2) {
    let totalSum = 0;
    let startNum = num1;
    let endNum = num2;
    if(num1 < 0 || num2 <0 || typeof num1 !== "number" || typeof num2 !== "number" ) return "ERROR";

    if(num1 > num2){
        startNum = num2;
        endNum = num1;
    }
    /** Solution 1: Using for loop */
    
    /*
    for (let i = startNum; i<= endNum; i++){
        totalSum += i;
    }
    */
    /** END OF Solution 1 */

    /** Solution 2: Use Sum of integers formula: (n(a+l))/2, where n is the number of integers, a is the first term, and l is the last term. */

    totalSum = (endNum * (startNum + endNum)) / 2;

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
