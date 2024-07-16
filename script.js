// Step 1: Create an Array
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate Random Selections
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Step 3: Hold Response Messages
let resultMessage = "";

// Step 4-6: Handle Selections and Apply Game Logic
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        resultMessage = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    // Step 7: Output Results
    document.getElementById("result").innerText = resultMessage;
}
