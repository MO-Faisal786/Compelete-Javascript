 //Extracting string charectors
//  There are three metods  for extracting string charectors:
// 1:charAt(position)
// 2:charCodeAt(position)
// 3:Property access []


// The charAt() method
// It returns the character at a specified index(position) in a string.
// let str = "Hello World";
// console.log(str.charAt(1));

// The charCodeAt() Method 
// It returns the unicode of the character at a specified position in a string.
// The method returns a UTF-16 code
// (an integer between 0 to 65535).

// let str = "Hello World";
// console.log(str.charCodeAt(1));

// Property Access 
// ES5 (2009) alows property Access [] on string 

var str = "HELLO WORLD";
console.log(str[0]);
