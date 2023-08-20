const palindromes = function (word) {
    //Let's lowercase the word and remove any spaces, special charactersfrom the word.
    const formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return formattedWord.split("").reverse().join("") === formattedWord;
};

// Do not edit below this line
module.exports = palindromes;
