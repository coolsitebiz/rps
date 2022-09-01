function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let selection = choices[Math.floor(Math.random() * 3)];
    return selection;
}

function getPlayerChoice() {
    let choice = prompt("Choose your weapon (rock, paper, or scissors):");
    if (!choice) {
        console.log("I guess you don't want to play.");
        return "quit";
    }
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return getPlayerChoice();
    } else {
        return choice;
    }

}

function playRound(playerChoice, computerChoice) {
    let outcome = {
        compChoice: computerChoice,
        result: ""
    }

    if (playerChoice === computerChoice) {
        outcome.result = "tie";
        return outcome;
    }
    switch (playerChoice) {
        case ("rock"):
            if (computerChoice === "scissors") {
                outcome.result = "win";

            }
            else if (computerChoice === "paper") {
                outcome.result = "lose";

            }
        case ("scissors"):
            if (computerChoice === "paper") {
                outcome.result = "win";

            }
            else if (computerChoice === "rock") {
                outcome.result = "lose";

            }
        case ("paper"):
            if (computerChoice === "rock") {
                outcome.result = "win";

            }
            else if (computerChoice === "scissors") {
                outcome.result = "lose";

            }
        case ("quit"):
            outcome.result = "lose";

        default:
            return outcome;
    }
}

function game(playerChoice) {
    //let score = [0, 0];
    let resultsDiv = document.querySelector('#results');
    let choiceDiv = document.querySelector('#choice');

    let result = playRound(playerChoice, getComputerChoice());
    choiceDiv.textContent = `Computer chose ${result.compChoice}.`
    if (result.result === "win") {
        resultsDiv.textContent = `You win!`;
        //score[0]++;
    }
    else if (result.result === "lose") {
        resultsDiv.textContent = `You lose!`;
        //score[1]++;
    }
    else {
        resultsDiv.textContent = `Tie game!`;
    }

    // if (score[0] === score[1]) {
    //     console.log("TIE GAME");
    // } else if (score[0] > score[1]) {
    //     console.log("You win!");
    // } else {
    //     console.log("CPU wins!");
    // }


}
