alert("Welcome to the Rock Paper Scissors game!");
alert("We'll play 5 round, good luck.");
alert("Lets start the game!");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if(
    human === "rock" && computer === "scissors" ||
    human === "paper" && computer === "rock" ||
    human === "scissors" && computer === "paper"
  ) {
    humanScore++;

    alert(`Human: ${human} vs Computer: ${computer}`);
    alert("Human win this round");
    alert(`Human score: ${humanScore} Computer Score: ${computerScore}`);

    playGame();
  } else if (human === computer) {
    alert(`Human: ${human} vs Computer: ${computer}`);
    alert("It's a tie!");
    alert(`Human score: ${humanScore} Computer Score: ${computerScore}`);

    playGame();
  } else {
    computerScore++;

    alert(`Human: ${human} vs Computer: ${computer}`);
    alert("Computer win this round");
    alert(`Human score: ${humanScore} Computer Score: ${computerScore}`);

    playGame();
  }
}

function getHumanChoice() {
  return prompt("Choose your option (rock, paper, scissors)");
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * options.length)];
}

function playGame() {
  if(humanScore === 3) {
    return alert("winner is human!");
  }

  if(computerScore === 3) {
    return alert("winner is computer!");
  }

  if(humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();