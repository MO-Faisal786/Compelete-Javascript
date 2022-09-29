// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇
// const outerFunc = (a) =>{
//     let b=10;
//     const innerFunc = () =>{
//         console.log(a+b);
//     };
//     innerFunc();
// };
// outerFunc(5);


// // it same like lexical scoping 

// // One more Example 👇

const outerFunc = (a) =>{
    let b=10;
    const innerFunc = () =>{
        console.log(a+b);
    };
    return innerFunc;
};
let checkClosure = outerFunc(5);
// console.log(checkClosure);
console.dir(checkClosure);
// checkClosure();
