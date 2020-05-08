const selection = ["rock", "paper", "scissors"];
let rounds = 5;
let compScore = 0;
let userScore = 0;

//Computer draws and returns random selection
function opponentSelect() {
let compSelection = selection[Math.floor(Math.random() * selection.length)];
return compSelection;
};


function gameMain () {
  //Draw user and computer selection (rock, paper, scissors).
  //winnerCheck();
  compChoice = opponentSelect();
  userChoice = prompt("Choose Rock, Papers or Scissors:").toLowerCase().trim();

  //Check if slections are a match, if not matched move through each if statememt
  if (userChoice == compChoice) {
    return (`You chose ${userChoice} your opponent chose ${compChoice}, you tied`);
  }
  if (userChoice == "rock") {
    if (compChoice == "paper"){
      compScore++;
      return (`You chose ${userChoice} your opponent chose ${compChoice}, sorry, paper Wins`);
      } else {
        userScore++;
        return (`You chose ${userChoice} your opponent chose ${compChoice}, Congrats, Rock Wins!`);
    }
  }
  if (userChoice == "paper"){
    if (compChoice == "scissors") {
      compScore++;
      return(`You chose ${userChoice} your opponent chose ${compChoice}, sorry, Scissors Win`);
      } else {
        userScore++;
        return (`You chose ${userChoice} your opponent chose ${compChoice}, congrats Paper Wins!`);
      }
    }
  if (userChoice == "scissors"){
    if (compChoice == "rock"){
      compScore++;
      return (`You chose ${userChoice} your opponent chose ${compChoice}, sorry, Rock Wins`);
      } else {
        userScore++;
        return (`You chose ${userChoice} your opponent chose ${compChoice}, congrats, Scissors Win!`);
      }
    }
  }

function winnerCheck () {
  if (userScore < 3 && compScore < 3);
    if (userScore == 3){
      return (`Congrats you won!`);
    }
    if (compScore == 3){
      return (`Sorry you opponent won.`);
    } else {
  console.log(`Your score: ${userScore}, opponent's score: ${compScore}.`);
    }
}

let i = 0;
while (i < rounds) {
  //gameMain();
  console.log(gameMain());
  winnerCheck();
  console.log(`comp:` + compScore);
  console.log(`user:` + userScore);
  i++;
  console.log(`round` + i);
  }
//
// console.log("You picked " + (userChoice));

//display winner
//keep track of each round (letNumWIn = 0 --> numWin ++
//to game function not return just stroe in memory.)
