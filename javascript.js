let you = 0;
let enemy = 0;
const h3 = document.querySelector('h3');
const score = document.querySelector('h4')
//returns a random choice from the three options available
function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//Returns the choice that wins 
function playRound(playerSelection, computerChoice){
    if(playerSelection == 'Rock'){
        if(computerChoice == 'Paper'){
            h3.style.color = 'red';
            h3.textContent = 'You Lose! 📃 Beats 🪨';
            enemy += 1;
        }
        else if(computerChoice == 'Scissor'){
            h3.style.color = 'chartreuse';
            h3.textContent = 'You Win! 🪨 Beats ✂️';
            you += 1;
        }
        else{
            h3.style.color = 'yellow';
            h3.textContent = 'TIE!';
        }
    }
    else if(playerSelection == 'Paper'){
        if(computerChoice == 'Rock'){
            h3.style.color = 'chartreuse';
            h3.textContent = 'You Win! 📃 Beats 🪨';
            you += 1;
        }
        else if(computerChoice == 'Scissor'){
            h3.style.color = 'red';
            h3.textContent = 'You Lose! ✂️ Beats 📃';
            enemy += 1;
        }
        else{
            h3.style.color = 'yellow';
            h3.textContent = 'TIE!';
        }
    }
    else if(playerSelection == 'Scissor'){
        if(computerChoice == 'Rock'){
            h3.style.color = 'red';
            h3.textContent = 'You Lose! 🪨 Beats ✂️';
            enemy += 1;
        }
        else if(computerChoice == 'Paper'){
            h3.style.color = 'chartreuse';
            h3.textContent = 'You Win! ✂️ Beats 📃';
            you += 1;
        }
        else{
            h3.style.color = 'yellow';
            h3.textContent = 'TIE!';
        }
    }
    updateScore();
    //end game
    if(you === 5 || enemy === 5){
        //timeout and give program time to update before continuing
        setTimeout(()=> gameOver()); 
    }
}

function updateScore(){
    console.log(`${you}, ${enemy}`);
    score.textContent = `You: ${you} Enemy: ${enemy}`;
}

function gameOver(){
    updateScore();
    if(you === 5){
        confirm('You Have Beaten Your Enemy! Play Again');
    }
    else{
        confirm('Your Enemy Has Won :(  Try Again');
    }
    // reset everything back
    you = 0;
    enemy = 0;
    updateScore();
    h3.style.color = 'black';
    h3.textContent = 'Result';
}

let button = document.querySelectorAll('button');
button.forEach(element => {
    element.addEventListener('click', () => playRound(element.classList.value, getComputerChoice()));
});

