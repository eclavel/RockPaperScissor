/*
//returns a random choice from the three options available
function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//Returns the choice that wins 
function playRound(playerSelection, computerChoice){
    console.log(computerChoice);
    console.log(playerSelection);
    if(playerSelection == 'Rock'){
        if(computerChoice == 'Paper'){
            return 'You Lose! Paper beats Rock';
        }
        else if(computerChoice == 'Scissor'){
            return 'You Win! Rock beats Scissor';
        }
        else{
            return 'Tie!';
        }
    }
    else if(playerSelection == 'Paper'){
        if(computerChoice == 'Rock'){
            return 'You Win! Paper beats Rock';
        }
        else if(computerChoice == 'Scissor'){
            return 'You Lose! Scissor beats Paper';
        }
        else{
            return 'Tie!';
        }
    }
    else if(playerSelection == 'Scissor'){
        if(computerChoice == 'Rock'){
            return 'You Lose! Rock beats Scissor';
        }
        else if(computerChoice == 'Paper'){
            return 'You win! Scissor beats Paper';
        }
        else{
            return 'Tie!';
        }
    }
}
//gets players choice and makes it case-insensitive then plays 5 rounds only
function game(){
    for(let i = 0; i < 5; i++){
       let playerInput = prompt('Choose: Rock, Paper, or Scissor','Rock');
       let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
       console.log(playRound(playerSelection,getComputerChoice()));
    }
}

game();

*/
