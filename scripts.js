function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let selection = choices[Math.floor(Math.random() * 3)];
  return selection;
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let outcome = {
    compChoice: computerChoice,
    result: "",
  }

  let resultsDiv = document.querySelector("#results");
  let choiceDiv = document.querySelector("#choice");
  let playerScore = document.querySelector("#playerScoreSpan");
  let cpuScore = document.querySelector("#cpuScoreSpan");

  choiceDiv.textContent =`Computer chose ${outcome.compChoice.toUpperCase()}.`;

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        outcome.result = "You win!";
        ++playerScore.textContent;
      } else if (computerChoice === "paper") {
        outcome.result = "You lose!";
        ++cpuScore.textContent;
      } else {
        outcome.result = "Tie game!"
      }
      break;

    case "scissors":
      if (computerChoice === "paper") {
        outcome.result = "You win!";
        ++playerScore.textContent;
      } else if (computerChoice === "rock") {
        outcome.result = "You lose!";
        ++cpuScore.textContent;
      } else {
        outcome.result = "Tie game!"
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        outcome.result = "You win!";
        ++playerScore.textContent;
      } else if (computerChoice === "scissors") {
        outcome.result = "You lose!";
        ++cpuScore.textContent;
      } else {
        outcome.result = "Tie game!"
      }
      break;
  }

  resultsDiv.textContent = outcome.result;

  if(cpuScore.textContent > 4) {
    alert(`You lose ${cpuScore.textContent} - ${playerScore.textContent}`);
    cpuScore.textContent = 0;
    playerScore.textContent = 0;
    choiceDiv.textContent =``;
    resultsDiv.textContent = ``;

  }
  if(playerScore.textContent > 4) {
    alert(`You win ${playerScore.textContent} - ${cpuScore.textContent}`);
    cpuScore.textContent = 0;
    playerScore.textContent = 0;
    choiceDiv.textContent =``;
    resultsDiv.textContent = ``;

  }

}






