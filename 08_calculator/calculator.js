const add = function(...args) {
  const additionResult = args.reduce((total, eachArgument) => {
    return total + parseInt(eachArgument);
  },0);
	return additionResult;
};

const subtract = function(...args) {
	const subtractResult = args.reduce((total, eachArgument) => {
    return total - parseInt(eachArgument);
  },(args[0]+args[0]));
	return subtractResult;
};

const sum = function(arr) {
  const arraySum = arr.reduce((total, item) => {
    return total + parseInt(item);
  },0);

  return arraySum;
};

const multiply = function(...args) {
  const multiplyResult = args.reduce((total, eachArgument) => {
    return total * parseInt(eachArgument);
  },1);
	return multiplyResult;
};

const power = function(a,b) {
	return Math.pow(parseInt(a), parseInt(b));
};

const factorial = function(a) {
	let returnArr = [];
  for(let i=a; i>=1; i--){
    returnArr.push(i);
  }

  const factorialResult = returnArr.reduce((total, eachDigit) => {
    return total * parseInt(eachDigit);
  }, 1);
  return factorialResult;

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
