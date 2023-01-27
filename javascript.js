function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

console.log(getComputerChoice());