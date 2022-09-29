// Write a program that works out wheather if a given year is a leap year or not?
var year = 2020;
debugger;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`This year ${year} is a leap year.`);
        } else {
            console.log(`This year ${year} is not a leap year.`);
        }
    } else {
        console.log(`This year ${year} is a leap year.`);
    }
} else {
    console.log(`This year ${year} is not a leap year.`);
}