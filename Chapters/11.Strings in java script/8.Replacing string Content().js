// Replacing String Content()
// string.prototype.replace(searchfor, replaceWith)
var str = 'Apple, Banana, Kivi';
let replaceStr = str.replace('Banana', 'BANANA');
console.log(replaceStr);

// Points to remember
// 1: The replace method does not change the string it is called on. It returns a new string.
// 2:By defoult, the replace() method replaces the first match 
// 3: By defoult, It replace() method is a case sensitive .