console.log("Algo Challenges");

// Adding two numbers

function addNumbers(num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(2,5));
console.log(addNumbers(10,20));
console.log(addNumbers(15,8));


// convert minutes to seconds

function convertMinToSec(minutestoconvert) {
    let convertedSeconds =  minutestoconvert * 60;
    return `${minutestoconvert} minutes is ${convertedSeconds} seconds`;
};

console.log(convertMinToSec(1));
console.log(convertMinToSec(60));

// calculate age into seconds

function ageToSeconds(age) {
    let yearsToMonths = age * 12;
    let monthsToDays = yearsToMonths * 30;
    let daysToHours = monthsToDays * 24;
    let hoursToMinutes = daysToHours * 60;
    let minutesToSeconds = hoursToMinutes * 60;
    return `For ${age} is ${minutesToSeconds} seconds`;
};
console.log(ageToSeconds(25));
console.log(ageToSeconds(42));
console.log(ageToSeconds(32));

// call 1st element in an array

let languages = ['Java', 'Javascript', 'Python', 'Ruby', 'HTML']

function firstElementInArray(arraylist) {
    return arraylist[0];
}

console.log(firstElementInArray(languages));

// Identify good or bad movies

function goodOrBadMovieRatings(ratings) {
    if (ratings >= 7 ) {
        return "Movie is good";
    } else {
        return "Movie is bad";
    }
};

console.log(goodOrBadMovieRatings(9));

// Find minimum number from Array

let arrayNumbers = [2,5,8,4,3,2,7,9]

function findMin(arrayOfNumbers) {
    let ascendingArray = arrayNumbers.sort(function (a, b) { return a - b });
    return ascendingArray[0]
}

console.log(findMin(arrayNumbers));

function findMax(arrayOfNumbers) {
    let ascendingArray = arrayNumbers.sort(function (a, b) { return a - b });
    return ascendingArray[ascendingArray.length - 1]
}

console.log(findMax(arrayNumbers));