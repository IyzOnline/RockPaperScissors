//project seemed too easy so I made my own version without looking at the hints or the objectives XDD

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const endResult = document.querySelector(".endResult");
const score = document.querySelector(".score");
const rounds = document.querySelector(".rounds");

const signContainer = document.querySelector(".signContainer");

let currentScore = 0;
let currentRounds = 0;
let computerScore = 0;

rounds.style.display = "none";
score.style.display = "none";


score.addEventListener("click", () => {
    endResult.textContent = "You have reset the game. Let's try again!";
    rounds.style.display = "none";
    score.style.display = "none";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

signContainer.addEventListener("click", (event) => {
    sign = event.target.parentElement.className;
    switch(sign){
        case 'rock':
        userAnswer = 1;
        break;
        case 'paper':
        userAnswer = 2;
        break;
        case 'scissors':
        userAnswer = 3;
        break;
        default:
        return;
    };

    Checking(userAnswer);
});

function Checking(userAnswer){
    rounds.style.display = "block";
    score.style.display = "block";
    let computerAnswer = Math.floor((Math.random() * 3) + 1);
    if(userAnswer === computerAnswer){
        endResult.textContent = "It's a tie!";
    }
    else if(userAnswer === 1){
        if(computerAnswer === 2){
            endResult.textContent = "Computer chose PAPER, Computer wins!";
            computerScore++;
        }
        else{
            endResult.textContent = "Computer chose SCISSORS, You win!";
            currentScore++;
        }
    }
    else if(userAnswer === 2){
        if(computerAnswer === 1){
            endResult.textContent = "Computer chose Rock, You win!";
            currentScore++;
        }
        else{
            endResult.textContent = "Computer chose Scissors, Computer wins!";
            computerScore++;
        }
    }
    else{
        if(computerAnswer === 1){
            endResult.textContent = "Computer chose Rock, Computer wins!";
            computerScore++;
        }
        else{
            endResult.textContent = "Computer chose Paper, You win!";
            currentScore++;
        }
    }

    currentRounds++;
    rounds.textContent = `Round ${currentRounds}!`;
    score.textContent = `Score: ${currentScore} | Click here to reset the game.`;
    
    if(currentScore === 5 || computerScore === 5){
        DisplayWinner();
    }
}

function DisplayWinner(){
    if (currentScore < computerScore) {
        endResult.textContent = "Congratulations! You have won!";
    } else {
        endResult.textContent = "Computer has won this round!";
    }
    
    computerScore = 0;
    currentScore = 0;
    currentRounds = 0;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
