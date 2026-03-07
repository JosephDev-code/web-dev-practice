console.log(
    "Hello"
)
// Making Strings

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const color = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"
//descision making
let myNum = Math.random()
if (myNum > 0.6) {
    console.log("Good number")
    console.log(myNum)
}
else {
    console.log("BAd num")
    console.log(myNum)
}
//&& and || or ! NOT logical functions, like logic gates
// JS arrays,' which is a  Data structure - collection of data
// array methods
//Push and pop , .push(variable) allows you to add a variable to the end of an array, meanwhile pop removes while
// shift and unshift is from the begining
//splice removes from the index you specify

//FUnctions  
// first you define the function
//function funcName(){
//do something}
function singSong() {
    console.log("DO")
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("FA")
}
singSong()
//then to run it
//funcName(); 
//Arguments (input to a function)
//         "(Parameter)"
function greet(person) {
    console.log(`Hi, ${person}!`);
}
//  "Argument"
greet('Bolu')
greet('Daniel')
//Arguments 2 you can input more than one parameter
//     "(Parameter1, Parameter2)"
function greet(person, age) {
    console.log(`Hi, ${person}!, you are ${age}`);
}
//  "Argument"
greet('Bolu', 12)
greet('Daniel', 4)
//a function that repeats smth a particular amount of times
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
//The Return Keyword  