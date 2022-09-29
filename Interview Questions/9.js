
// //🏁🏁🏁 Back To Advanced JavaScript 




// Currying
// const Sum = (num1) => {
//     console.log(num1);
    // return function (num2) {
    //     // console.log(num1,num2);
    //     return function (num3) {
    //         console.log(num1+num2+num3);
//         }
//     }
// }

// We can write this as follows
const Sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

Sum (5)(3)(8);

