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
// Take the computerChoice and playerChoice. Compare the two - If they are ===, its a tie.
// Rock beats scissors, scissors beats paper, paper beats rock.
function playRound () {
    let computerChoice = getComputerChoice();
    const input = prompt("Choose Rock, Paper or Scissors!");
    const playerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    console.log(playerChoice);
    console.log(computerChoice);
    console.log(typeof(playerChoice));
    console.log(typeof(computerChoice));

    if (computerChoice === playerChoice) {
        return "It's a tie!";
    }
    else if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        return "That's not a valid option, silly!";
    }

    else if (computerChoice === "Rock" && playerChoice === "Paper" || computerChoice === "Paper" && playerChoice === "Scissors" || computerChoice === "Scissors" && playerChoice === "Rock") {
        i++;
        return "You win!";
    }

    else {
        j++;
        return "You lose!";
    }
}

let i = 0;
let j = 0;

function game () {
    console.log(playRound());
    console.log("Your score: " + i);
    console.log("CPU score: " + j);

    console.log(playRound());
    console.log("Your score: " + i);
    console.log("CPU score: " + j);

    console.log(playRound());
    console.log("Your score: " + i);
    console.log("CPU score: " + j);

    console.log(playRound());
    console.log("Your score: " + i);
    console.log("CPU score: " + j);

    console.log(playRound());
    console.log("Your score: " + i);
    console.log("CPU score: " + j);
 }

console.log(game());

if (i > j) {
    console.log("You win!");
}
else if (i < j) {
    console.log("You lose...");
}
else {
    console.log("Draw game!");
}