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
    const input = prompt("Choose Rock, Paper or Scissors!");
    const playerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(input);
    console.log(playerChoice);
// Compare the two selections
// Take the ComputerChoice and PlayerSelection. Compare the two - If they are ===, its a tie.
// Rock beats scissors, scissors beats paper, paper beats rock.
function playRound () {
    let computerChoice = getComputerChoice();
    if (computerChoice === playerChoice) {
        return "It's a tie!";
    }
    else if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        return "That's not a valid option, silly!";
    }

    else {
        switch (computerChoice, playerChoice) {
            
        }
    }
}

console.log(playRound());