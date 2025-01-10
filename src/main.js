const $ = (e) => document.querySelector(e);

const overlay = $(".overlay");
const overlayText = $(".overlay-text");
const startRestartBtn = $(".start-restart-btn");

const contextText = $(".context-text");

const humanScore = $(".human-score");
const computerScore = $(".computer-score");

const btnsContainer = $(".btns-container");

let humanScoreCounter = 0;
let computerScoreCounter = 0;

const gameOptions = ["rock", "paper", "scissors"];

function startRestartGame() {
  overlay.style.display = "none";
  contextText.style.color = "#ffffff";

  overlayText.textContent = "press restart to play again";
  startRestartBtn.textContent = "restart";

  humanScoreCounter = 0;
  computerScoreCounter = 0;
  humanScore.textContent = humanScoreCounter;
  computerScore.textContent = computerScoreCounter;
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice;
  const computer = computerChoice;

  contextText.textContent = `${human} vs ${computer}`;

  disableBtnsTemporary();

  if(
    human === "rock" && computer === "scissors" ||
    human === "paper" && computer === "rock" ||
    human === "scissors" && computer === "paper"
  ) {
    setTimeout(() => {
      contextText.textContent = "human win this round";

      humanScoreCounter++;
      humanScore.textContent = humanScoreCounter;

      whoIsWinner();
    }, 900);
  } else if (human === computer) {
    setTimeout(() => {
      contextText.textContent = "it's a tie";
    }, 900);
  } else {
    setTimeout(() => {
      contextText.textContent = "computer win this round";

      computerScoreCounter++;
      computerScore.textContent = computerScoreCounter;

      whoIsWinner();
    }, 900);
  }
}

function whoIsWinner() {
  if(humanScoreCounter === 3) {
    contextText.textContent = "human win";

    disableBtnsTemporary();

    setTimeout(() => {
      overlay.style.display = "flex";
      contextText.style.color = "transparent";
    }, 900);
  };

  if(computerScoreCounter === 3) {
    contextText.textContent = "computer win";

    disableBtnsTemporary();

    setTimeout(() => {
      overlay.style.display = "flex";
      contextText.style.color = "transparent";
    }, 900);
  };
}

function getComputerChoice() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

btnsContainer.addEventListener('click', (e) => {
  const target = e.target.className;

  if(gameOptions.includes(target)) {
    playRound(target, getComputerChoice());
  }
});

function disableBtnsTemporary() {
  btnsContainer.querySelectorAll('button').forEach((e) => {
    e.disabled = true;
    e.style.opacity = "0.2";

    setTimeout(() => {
      e.disabled = false;
      e.style.opacity = "1.0";
    }, 900);
  });
}

startRestartBtn.addEventListener('click', startRestartGame);