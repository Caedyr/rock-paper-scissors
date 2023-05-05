console.log("oy");

// Generate a new computer selection
// Make the computer choose randomly between Rock, Paper, or Scissors
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}
// Request a user selection
// Send the user an input request for Rock, Paper or Scissors.

// Compare the two selections
// Take the ComputerChoice and PlayerSelection. Compare the two - If they are ===, its a tie.
// Rock beats scissors, scissors beats paper, paper beats rock.
function playRound () {

}

console.log(getComputerChoice());