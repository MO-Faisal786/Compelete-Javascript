// promises
// 2CONDITION ARE HERE => SUCCESS => FAIL 

// fetch("http")

// fullfilled
// reject
// one more but less use named  ongoing

// 90% promise consumed not created


// adync await in es8 update

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokebtn');



// const generateJokes = () => {

//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// };



const generateJokes = async () => {



    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(err);
    }
};






jokeBtn.addEventListener('click', generateJokes);
generateJokes();