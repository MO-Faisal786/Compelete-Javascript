// Sustring() Method
// Substring is similer to slice()
// The difference is that substring cannot accept negative indexes.
var str = 'Apple, Banana, Kivi';
// let res = str.substring(0, 4);
let res = str.substring(12, -2 ); // we cannot pass negative arguments in this method
console.log(res);