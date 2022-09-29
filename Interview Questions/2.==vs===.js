//what is the differenc between == vs ===?
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2); // Double(==) equals checks only the value of variables  
console.log(num1 === num2); // tripple (===) equals checks the values of variable as well as data type
