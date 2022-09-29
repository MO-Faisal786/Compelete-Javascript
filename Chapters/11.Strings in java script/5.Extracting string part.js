// Extracting string parts 

// There are 3 methods for extracting a part of a string 

// slice(start, end)
// substring(start,end)
// substr(start, length)

// the slice() method extracts a part of astring and returns a extracted part in a new string
/**  The method takes 2 parameters : the start position, 
 *  and the end position(end not included)
*/
var str = 'Apple, Banana, Kivi';
let res = str.slice(0,5);
let res = str.slice(7,-1);
let res = str.slice(7);
console.log(res);




// substring()