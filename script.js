const selection = ["rock", "paper", "scissors"];
var userChoice = prompt("Choose Rock, Papers or Scissors:").toLowerCase();
var compChoice = selection[Math.floor(Math.random() * selection.length)];


function compare (userChoice, compChoice) {
  if (userChoice == compChoice) {
    return "You tied";
  }
  if (userChoice == "rock") {
    if (compChoice == "paper"){
      return "Sorry, Paper Wins"
    } else {
      return "Congrats, Rock Wins!"
    }
  }
  if (userChoice == "paper"){
    if (compChoice == "scissors") {
      return "Sorry, Scissors Win"
    } else {
        return "Congrats Paper Wins!"
      }
    }
  if (userChoice == "scissors"){
    if (compChoice == "rock"){
      return "Sorry, Rock Wins"
      } else {
        return "Congrats, Scissors Win!"
      }
    }
  }
/*

function game ()

console.log(compChoice);
console.log(compare(userChoice,compChoice));
*/
