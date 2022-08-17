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
    console.log("player: " + playerChoice);
    console.log("computer: " + computerChoice);

    if (playerChoice === computerChoice) {
        return "tie";
    }
    switch (playerChoice) {
        case ("rock"):
            if (computerChoice === "scissors") {
                return "win";
            }
            else if (computerChoice === "paper") {
                return "lose";
            }
        case ("scissors"):
            if (computerChoice === "paper") {
                return "win";
            }
            else if (computerChoice === "rock") {
                return "lose";
            }
        case ("paper"):
            if (computerChoice === "rock") {
                return "win";
            }
            else if (computerChoice === "scissors") {
                return "lose";
            }
        case ("quit"): 
            return "lose";
        
    }
}

function game() {
    let score = [0,0];
    for (i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result === "win") {
            console.log("You win!")
            score[0]++;
        }
        else if (result === "lose"){
            console.log("You lose.")
            score[1]++;
        }
        else {
            console.log("Tie game.")
        }
    }
    console.log("Your score: " + score[0]);
    console.log("CPU score: " + score[1]);
    if (score[0] === score[1]) {
        console.log("TIE GAME");
    } else if (score[0] > score[1]) {
        console.log("You win!");
    } else {
        console.log("CPU wins!");
    }


}
