const findTheOldest = function(peopleArr) {
    const currentYear = (new Date()).getFullYear();
    
    //const oldestPerson = peopleArr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1));
    //return oldestPerson[0];
    
    const oldestPerson = peopleArr.sort((a,b) => {

        let aAge = currentYear - a.yearOfBirth;
        let bAge = currentYear - b.yearOfBirth;
        if('yearOfDeath' in a){
            aAge = a.yearOfDeath - a.yearOfBirth;
        }

        if('yearOfDeath' in b){
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return aAge > bAge ? -1 : 1;

    });

    return oldestPerson[0];

};


// Do not edit below this line
module.exports = findTheOldest;
