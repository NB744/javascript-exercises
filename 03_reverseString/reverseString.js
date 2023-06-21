const reverseString = function(word) {
    //First, let's split the word into an array.
    let wordArr = word.split("");

    //Now, reverse the array using array's reverse method.
    let reverseWordArr = wordArr.reverse();

    //Now, join the elements of the array.
    return reverseWordArr.join("");

};

// Do not edit below this line
module.exports = reverseString;
