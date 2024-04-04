function getComputerChoice(max) {
    max = 3;
    let computerChoice = Math.floor(Math.random() * max);
    switch (computerChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function getPlayerChoice(choice) {
    if (choice === null || choice === undefined) {
        // If the choice is null or undefined, return an empty string or handle it accordingly
        return ""; // You can also return some default value here if needed
    } else {
        // Convert the first letter to uppercase and the rest to lowercase
        choice = choice.trim().charAt(0).toUpperCase() + choice.trim().slice(1).toLowerCase();
        return choice;
    }
}


function playRound(x,y) {
    if (x === y) {
        return "You tied!"
    } else if ((x === "Rock" && y ==="Paper")
        || (x === "Paper" && y ==="Scissors")
        || (x === "Scissors" && y ==="Rock")) {
        return "You win! " + y + " beats " + x
    } else if ((x === "Rock" && y ==="Scissors")
        || (x === "Paper" && y ==="Rock")
        || (x === "Scissors" && y ==="Paper")) {
        return "You lose! " + x + " beats " + y
    } else {
        return "I don't recognize your choice"
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice(prompt("Make your choice", "Rock, Paper, Scissors")); // Assuming player always chooses "rock"
        
        console.log("Computer chose " + computerSelection);
        console.log("Player chose " + playerSelection);
        let roundResult = playRound(computerSelection, playerSelection);
        console.log(roundResult);

        if (roundResult.includes("You win")) {
            playerScore++
        } else if (roundResult.includes("You lose")) {
            computerScore++
        } else {
    
        }
    }
    console.log("P: " + playerScore + " C: " + computerScore)
}

playGame();