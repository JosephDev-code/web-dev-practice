//Axios is a library that makes it easier to make HTTP requests.
//  It is a promise-based HTTP client for the browser and node.js. It is similar to fetch, but it has some additional features that make it easier to use.

// axios.get('https://swapi.info/api/people/1/')
//     .then((res) => {
//         console.log("RESOLVED", res);
//  })
//     .catch ((e) => {
//     console.log("REJECTED", e)
// });

// using async but with axios, we can make the code cleaner and easier to read.
//the try and catch block is used to handle errors. The try block is used to wrap the code
//  that we want to execute, and the catch block is used to handle any errors that may occur.
//the id is optional, but it is used to specify the id of the person we want to get.
//  If we don't specify an id, we will get a list of all the people in the database.
const loadStarWarsPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.info/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR", e)
    }
};

loadStarWarsPeople(1);
loadStarWarsPeople(5);


//configuring http headers with axios. We can use the headers property to set the headers for the request. 
// Using DOM manipulation, we can display the jokes on the page. We can use the append method to add the joke to the list of jokes.
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');
// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         console.log(res.data.joke);
//         const newLI = document.createElement('LI');
//         newLI.append(res.data.joke);
//         jokes.append(newLI);
//     } catch (e) {
//         console.log("ERROR", e)
//     }
// }
//  We can use the addEventListener method to listen for a click event on the button. When the button is clicked, we will call the getDadJoke function.
// button.addEventListener('click', getDadJoke);

// Another way to do this is 
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    console.log(jokeText);
    newLI.append(jokeText);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.log("ERROR", e)
        return "NO JOKES AVAILABLE! SORRY! :("
    }
}
button.addEventListener('click', addNewJoke);
