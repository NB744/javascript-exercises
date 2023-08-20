const getTheTitles = function(bookArr) {
    const returnArr = bookArr.map(eachBook => eachBook.title);
    return returnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
