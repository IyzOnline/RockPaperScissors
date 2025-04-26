const buttons = document.querySelector(".buttons");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const endResult = document.querySelector(".endResult");
const score = document.querySelector(".score");

let currentScore = 0;

score.addEventListener("click", () => {
    score.textContent = "Score: 0";
});

// buttons.addEventListener("click", () =>{
//     let computerAnswer = Math.floor((Math.random() * 3) + 1);
// })


