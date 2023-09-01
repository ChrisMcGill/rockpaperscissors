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

let playerChoice;
let computerChoice;

let resultsAnnounce;
let gameResult;


// get player choice from prompt - w
function playerInput(){
    let getPlayerChoice = prompt("rock / paper / scissors?");
    if (getPlayerChoice.toLowerCase() === "rock"){
        playerChoice = "rock"
    } else if (getPlayerChoice.toLowerCase() === "paper"){
        playerChoice = "paper"
    } else if (getPlayerChoice.toLowerCase() === "scissors"){
        playerChoice = "scissors"
    } else {
        alert("Please select rock, paper or scissors")
    };
};

// while (playerChoice === undefined){
//     getPlayerChoice = prompt("rock / paper / scissors?")
// }
// need a catch loop for incorrect inputs




// gets compute choice random - w
function getComputerChoice(){
    let jumble;
    jumble = Math.floor(Math.random()*100);
    if (jumble>33 && jumble<67){
        return computerChoice = "rock"
    } else if (computerChoice<33){
        return computerChoice = "paper"
    } else {
        return computerChoice = "scissors"
    };
};

// work out how to loop
// wont read roundreult will read compare choice?


//prints results - w
function compareChoice(computerChoice, playerChoice){
    if (computerChoice === playerChoice){
        return resultsAnnounce = "It's a TIE :/ *cringe*"
    } else if (((computerChoice === "rock") && (playerChoice === "scissors")) || ((computerChoice === "paper") && (playerChoice === "rock")) || ((computerChoice === "scissors") && (playerChoice === "paper"))){
        return resultsAnnounce = "The machine has won again! >:("
    } else if (((computerChoice === "scissors") && (playerChoice === "rock")) || ((computerChoice === "rock") && (playerChoice === "paper")) || ((computerChoice === "paper") && (playerChoice === "scissors"))){    
        return resultsAnnounce = "You have deaften the machine! :D"
    };    
};

function playGame(){
    let pScore = 0;
    let cScore = 0;

    while ((pScore<5) || (cScore<5)){
        playerInput();
        getComputerChoice();
        compareChoice(computerChoice, playerChoice);
        if (computerChoice === "The machine has won again! >:("){
            return cScore+1;
        } else if(playerChoice === "You have deaften the machine! :D"){
            return pScore+1;
        } else{
            break
        };

        // console.log("Human :" + (pScore));
        // console.log("Computer:" + (cScore));
        // return computerChoice = null;
        // return playerChoice = null;
    };

    if (pScore=5){
        return gameResult = "Humans are victorius again"
    } else if (cScore=5){
        return gameResult = "The machines have overthrown us"
    };

    console.log(gameResult);
};

//make button play game to start the script onclick="playGame()"
// console.log(playerChoice);

// getComputerChoice(computerChoice);
// console.log(computerChoice);

// compareChoice(computerChoice, playerChoice);
// console.log(resultsAnnounce);

