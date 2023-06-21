const removeFromArray = function(mainArr , ...removingVals) {
    //let returnArr = mainArr;
    for(const eachVal of removingVals){
        //Get the index of this value.
        let eachValIndex = mainArr.indexOf(eachVal);

        //See if there was such an element.
        if(eachValIndex >= 0){
            //This means the element was found.
            //Now, splice the array at the index and return the array.
            mainArr.splice(eachValIndex, 1);
        }
        
    }
    return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
