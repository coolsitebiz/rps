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

  if (playerChoice === computerChoice) {
    outcome.result = "tie";

    resultsDiv.textContent = `Tie game!`;
    console.log(outcome);
    return outcome;
  }
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        outcome.result = "You win!";
      } else if (computerChoice === "paper") {
        outcome.result = "You lose!";
      }
      console.log(outcome);
      break;
    case "scissors":
      if (computerChoice === "paper") {
        outcome.result = "You win!";
      } else if (computerChoice === "rock") {
        outcome.result = "You lose!";
      }
      console.log(outcome);
      break;
    case "paper":
      if (computerChoice === "rock") {
        outcome.result = "You win!";
      } else if (computerChoice === "scissors") {
        outcome.result = "You lose!";
      }
      console.log(outcome);
      break;
}
resultsDiv.textContent = outcome.result;
}

// function game() {
//   let score = [0, 0];
//   let rounds = 0;
//   let resultsDiv = document.querySelector("#results");
//   let choiceDiv = document.querySelector("#choice");
//   let playerScore = document.querySelector("#playerScoreSpan");
//   let cpuScore = document.querySelector("#cpuScoreSpan");
//     let result = playRound(playerChoice, getComputerChoice());
//     choiceDiv.textContent = `Computer chose ${result.compChoice.toUpperCase()}.`;
//     if (result.result === "win") {
//       resultsDiv.textContent = `You win!`;
//       playerScore.textContent = ++score[0];
//     } else if (result.result === "lose") {
//       resultsDiv.textContent = `You lose!`;
//       cpuScore.textContent = ++score[1];
//     } else {
//       resultsDiv.textContent = `Tie game!`;
//     }
//     rounds++;
//   }
  

  // if (score[0] === score[1]) {
  //     console.log("TIE GAME");
  // } else if (score[0] > score[1]) {
  //     console.log("You win!");
  // } else {
  //     console.log("CPU wins!");
  // }


