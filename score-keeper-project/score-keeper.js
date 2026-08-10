const reset = document.querySelector('#reset')

const p1 = {
    score: document.querySelector('#playerOne'),
    button: document.querySelector('#p1button')
}
const p2 = {
    score: document.querySelector('#playerTwo'),
    button: document.querySelector('#p2button')
}

const selectScore = document.querySelector('#score');
let winningScore = Number(selectScore.value);
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

// function playTo() {
//     let winningScore = Number(selectScore.value);
//     if (!isGameOver) {
//         p1.score += 1;
//         if (p1.score === winningScore) {
//             isGameOver = true;
//         }
//         p1.score.textContent = p1Score
//     }
// }
p1.button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            p1.score.classList.add('has-text-success');
            p2.score.classList.add('has-text-danger');
            p1.button.disabled = true;
            p2.button.disabled = true;
            isGameOver = true;
        }
        p1.score.textContent = p1Score
    }
});
p2.button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            p2.score.classList.add('has-text-success');
            p1.score.classList.add('has-text-danger');
            p1.button.disabled = true;
            p2.button.disabled = true;
            isGameOver = true;
        }
        p2.score.textContent = p2Score
    }
});
selectScore.addEventListener('change', function () {
    winningScore = Number(selectScore.value);
    // if (p1Score && p2Score !== winningScore) {
    //     alert('Sorry cant change score mid game');
    // }
    p1Score = 0;
    p1.score.textContent = p1Score
    p2Score = 0;
    p2.score.textContent = p2Score
    isGameOver = false
});
reset.addEventListener('click', function () {
    p1Score = 0;
    p1.score.textContent = p1Score
    p2Score = 0;
    p2.score.textContent = p2Score
    p1.score.classList.remove('has-text-success', 'has-text-danger');
    p2.score.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
    isGameOver = false
});