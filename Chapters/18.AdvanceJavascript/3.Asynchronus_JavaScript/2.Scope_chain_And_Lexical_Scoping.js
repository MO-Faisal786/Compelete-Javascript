
// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇
let a = "Hello Guys. "; //Global scope
const first = () =>{
    let b = "How are you ?";

    const second = () => {
        let c= "Hii, I am fine...Thank You so Much...";
        console.log(a+b+c);
    };
    second();
    console.log(a+b+c);// // I can not use c varible's value.
};

first();