const repeatString = function(startStr, repeatNum) {
    let finalStr = "";
    if(repeatNum < 0){
        return "ERROR";
    }
    for(let i = 0; i < repeatNum; i++){
            finalStr += startStr;
    }

    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
