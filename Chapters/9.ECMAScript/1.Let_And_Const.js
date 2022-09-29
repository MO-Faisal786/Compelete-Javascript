// 1. Let vs const vs var
// var myName = "Faisal malik";
// console.log(myName);

// myName = "Fiza malik";
// console.log(myName);

// let myName = "Faisal malik";
// console.log(myName);

// myName = "Fiza malik";
// console.log(myName);

// const myName = "Faisal malik";
// console.log(myName);

// myName = "Fiza malik";
// console.log(myName);

// var is function scope
// let and const are block scope

// function biodata(){
//     var myFirstName = "Faisal malik";
//     console.log("inner" + myFirstName);

//     if(true){
//         var myLastName = "Fiza malik";
//         console.log('Outer' + myLastName);
//         console.log("inner" + myFirstName);
//     };
// };

// function biodata(){
//     let myFirstName = "Faisal malik";
//     console.log("inner" + myFirstName);

//     if(true){
//         let myLastName = "Fiza malik";
//         console.log('Outer' + myLastName);
//         console.log("inner" + myFirstName);
//     };
//     console.log('Outer' + myLastName);

// };

function biodata(){
    const myFirstName = "Faisal malik";
    console.log("inner" + myFirstName);
};
console.log("inner" + myFirstName);
biodata();

// var => Function scope 
// let and const => Block Scope 
