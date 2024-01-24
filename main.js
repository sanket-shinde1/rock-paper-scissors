const choices = ["Rock","Paper","Scissors"];
let pWin = 0;
let cWin = 0;

function game(){
   
    for(let count=0; count < 5; count++){
        
        playRound(count);
    }
    finalResult();
}

function playRound(round){

    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    if(winner == 'Player Wins'){
        pWin++;
    }
    else if(winner == 'Computer Wins'){
        cWin++;
    }
    display(playerSelection,computerSelection,winner,round);
}

function validate(input){
    return input === 'rock' || input === 'paper' || input === 'scissors';
}

function playerChoice(){
    let input;
    do{
         input = prompt("Type Rock Paper or Scissors");
         input = input.toLowerCase();
    }while(!validate(input));

    return input;
}

function computerChoice(){

    let choice =  choices[Math.floor(Math.random() * choices.length)];
    choice = choice.toLowerCase();
    return choice;
}

function checkWinner(playerSelection,computerSelection){

    if(playerSelection==computerSelection){
        return "It's Tie";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "Player Wins"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "Player Wins";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Player Wins";
    }
    else{
        return "Computer Wins"
    }
}

function display(playerSelection,computerSelection,winner,round){
    console.log("Round :",round);
    console.log("Player Choice :",playerSelection);
    console.log("Computer Choice :",computerSelection);
    console.log("Winner :",winner);
    console.log("_________________________________________");
}

function finalResult(){
    if(pWin > cWin){
        console.log("Player is the  winner");
    }
    else if(pWin == cWin){
        console.log("Round is tied");
    }
    else{
        console.log("Computer is a Winner ");
    }
}

// game();