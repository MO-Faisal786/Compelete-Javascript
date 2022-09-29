/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// Creating date objects 
// There are four ways to create a new date object

// new date()
// new date(year, month, day, hours, minutes, seconds, millisecinds)
// // it takes 7 arguments
// new date(milliseconds)
// // we can not avoid the month section
// new date(date string)


// new date()
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleString());// it gives 9/11/2022 1:12:22 PM
// console.log(currDate.toString());

//date.now()
// Return the numeric value corresponding to the current time - the number of milliseconds elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year months days hour minutes seconds milliseconds)
// Note: javascript counts months 0 to 11.

// january is 0 and December is 11.

// var d = new Date(2022, 0, 19 ,10, 41, 30, 0);
// console.log(d.toLocaleString());
// console.log(d.toString());


// new Date(DateString);
// new Date(DateString) creates a dateobject from a date string 

// var d = new Date("october 13, 2014, 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds)

// var d = new Date(2452988889947);
// console.log(d.toLocaleString());


