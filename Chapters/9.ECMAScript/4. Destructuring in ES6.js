// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  // console.log(myAge);

  // let [myFName,myAge, myLName] = myBioData;
  // console.log(myLName);

  // we can add values too 

  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 🏁
  const myBioData = {
    myFname : 'vinod',
    myLname : 'thapa',
    myAge : 26
  }

  // console.log(myBioData.myFname);

  let age = myBioData.age;
  let myLname = myBioData.myLname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  console.log(myLname);