//ECMAScript ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('yellow');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 
// we have a more feature in this update called async await... 

// String padding 
// Object.values()
// Object.entries()

// const message = "my name is vinod".padStart(6);
// console.log(message);
// // console.log(message.padStart(5));
// // console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// console.log( Object.values(person) );
// console.log( Object.entries(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person, myName: 'faisal malik'};

// console.log(person);
// console.log(sPerson);

 
// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);