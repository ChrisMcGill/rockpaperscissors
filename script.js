// play game button
// button runs function of game
// take input of player as lowercase string
// return this as number? for comparison
// create function getComputerChoice
// math.random*100 use values to generate choice rps
// check for catch cases 
// use a let to count the winner of each round
// best of 5 wins - declare the winner and end the loop

// button ->
// game function ->
// player choice .>
// computer choice ->
// comparison and winner ->
// rounds tallied ->
// winner declared and loop closed 


function playGame(){
    //playerchoice func
    //getcompchoice func
    //comparison func
    // round tally func
    // winner declared func
};

function getPlayerChoice(){
    let playerChoice;
    playerChoice = document.getElementById("textChoice").textContent;
    return playerChoice;
};

console.log(getPlayerChoice());

function getComputerChoice(){
    let computerChoice;
    computerChoice = Math.floor(Math.random()*100);
    if (computerChoice>33 && computerChoice<67){
        return "rock"
    } else if (computerChoice<33){
        return "paper"
    } else {
        return "scissors"
    };
};

function compareChoice(){
    if (getComputerChoice === getPlayerChoice){
        //its a tie
    }
};

console.log(getComputerChoice());