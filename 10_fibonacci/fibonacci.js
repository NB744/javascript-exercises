const fibonacci = function(nth) {
    if(nth < 0){
        return "OOPS";
    }

    const fibonacciArr = [1, 1];
    for(let i = 2; i <=nth; i++){
        fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
    }

    return fibonacciArr[parseInt(nth) - 1];

};

// Do not edit below this line
module.exports = fibonacci;
