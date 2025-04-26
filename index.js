const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const endResult = document.querySelector(".endResult");
const score = document.querySelector(".score");
const attempts = document.querySelector(".attempts");

let currentScore = 0;
let currentOption = 0;
let currentAttempts = 0;

attempts.style.display = "none";
score.style.display = "none";


score.addEventListener("click", () => {
    currentScore = 0;
    endResult.textContent = "You have reset the game. Let's try again!";
    score.textContent = "Score: 0";
    attempts.textContent = "Attempts: 0";
});


rock.addEventListener("click", () => {
    userAnswer = 1;
    Checking(userAnswer);
});


paper.addEventListener("click", () => {
    userAnswer = 2; 
    Checking(userAnswer);    if(currentAttempts === 1){
        score.display = "block";
        attempts.display = "inline-block";
    }
});


scissors.addEventListener("click", () => {
    userAnswer = 3;
    Checking(userAnswer);
});

function Checking(userAnswer){
    attempts.style.display = "block";
    score.style.display = "block";
    currentAttempts++;
    let computerAnswer = Math.floor((Math.random() * 3) + 1);
    if(userAnswer === computerAnswer){
        endResult.textContent = "It's a tie!";
    }
    else if(userAnswer === 1){
        if(computerAnswer === 2){
            endResult.textContent = "Computer chose PAPER, Computer wins!";
        }
        else{
            endResult.textContent = "Computer chose SCISSORS, You win!";
            currentScore++;
        }
    }
    else if(userAnswer === 2){
        if(computerAnswer === 1){
            endResult.textContent = "Computer chose Rock, User wins!";
            currentScore++;
        }
        else{
            endResult.textContent = "Computer chose Scissors, Computer wins!";
        }
    }
    else{
        if(computerAnswer === 1){
            endResult.textContent = "Computer chose Rock, Computer wins!";
        }
        else{
            endResult.textContent = "Computer chose Paper, User wins!";
            currentScore++;
        }
    }
    score.textContent = `Score: ${currentScore}`;
    attempts.textContent = `Attempts: ${currentAttempts}`;
}
