const btn = document.querySelector('#v2')
btn.onclick = function () {
    console.log('You Clicked')
}
const btn2 = document.querySelector('#v3')
// this is one way of doing it
// btn2.addEventListener('click', function () {
//     console.log("I'm version 3 Button")
// })
// the function can be predefined and then recalled
function btnAction() {
    alert("I'm version 3 button")
    return;
}
btn2.addEventListener('click', btnAction)
const tasBtn = document.querySelector('#tas')
function twist() {
    console.log('Twisttttt')
    return;
}
function shout() {
    console.log('Shout!!')
    return;
}
// the code below shows that it can be executed over and over
// tasBtn.addEventListener('dblclick', twist)
// tasBtn.addEventListener('dblclick', shout)
// the code below limits twist to execute only once
tasBtn.addEventListener('dblclick', twist, { once: true })
tasBtn.addEventListener('dblclick', shout)
// event and this keyword
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
// this is the same code that will be done below, but it is without the keyword 'this'
// const buttons = document.querySelectorAll('.rndColor')

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();

//     })
// }
const buttons = document.querySelectorAll('.rndColor')

for (let button of buttons) {
    button.addEventListener('click', function () {
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor();

    })
}

// event object and keyboard event 
// creates an object that contains info about the event
document.querySelector('.evtObj').addEventListener('click', function (evt) {
    console.log(evt)
})
// const input = document.querySelector('input')
// input.addEventListener('keydown', function () {
//     console.log('KEYDOWN');

// })
// input.addEventListener('keyup', function () {
//     console.log('KEYUP');

// })
// const input = document.querySelector('input')
// input.addEventListener('keydown', function (e) {
//     console.log(e.key);[]
//     console.log(e.code);

// })
// to listen anywhere in the page
// window.addEventListener('keydown', function (e) {
//     console.log(e.code);
// })
// to target a specific keyboard key
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        default:
            console.log("IGNORED")
    }
})

