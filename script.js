//rock paper scissors best of 5
let playerChoice;
let computerChoice;
let resultsAnnounce;
let gameResult;
let pScore = 0;
let cScore = 0;

// get player choice from prompt 
function playerInput(){
    let getPlayerChoice = prompt("rock / paper / scissors?");
    if (getPlayerChoice.toLowerCase() === "rock"){
        return playerChoice = "rock";
    } else if (getPlayerChoice.toLowerCase() === "paper"){
        playerChoice = "paper";
    } else if (getPlayerChoice.toLowerCase() === "scissors"){
        playerChoice = "scissors";
    } else {
        alert("Please select rock, paper or scissors");
    };
};

// gets compute choice random - w
function getComputerChoice(){
    let jumble;
    jumble = Math.floor(Math.random()*100);
    if (jumble>=33 && jumble<67){
        return computerChoice = "rock";
    } else if (jumble<33){
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    };
};

//compare input vs computer choice
function compareChoice(){
    if (computerChoice === playerChoice){
        return resultsAnnounce = "It's a TIE :/ *cringe*";
    } else if (((computerChoice === "rock") && (playerChoice === "scissors")) || ((computerChoice === "paper") && (playerChoice === "rock")) || ((computerChoice === "scissors") && (playerChoice === "paper"))){
        return resultsAnnounce = "The machine has won again! >:(";
    } else if (((computerChoice === "scissors") && (playerChoice === "rock")) || ((computerChoice === "rock") && (playerChoice === "paper")) || ((computerChoice === "paper") && (playerChoice === "scissors"))){    
        return resultsAnnounce = "You have deaften the machine! :D";
    };    
};

//print out for round result
function resultsCompare(){
        if (resultsAnnounce === "The machine has won again! >:("){
            return cScore++;
        } else if(resultsAnnounce === "You have deaften the machine! :D"){
            return pScore++;
        };
};

//finish game with final print declaring winner
function finale(){
    if (pScore === 5){
        return gameResult = "V I C T O R Y !";
    } else {
        return gameResult = "D E F E A T !";
    };
};

//function to run whole game
function playGame(){

    while ((pScore<5) && (cScore<5)){
        playerInput();
        getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        compareChoice();
        resultsCompare();
        console.log(resultsAnnounce); // equal bcuz undefined

        console.log("Human: " + (pScore));
        console.log("Computer :" + (cScore));
    };

    finale();
    console.log(gameResult);
};
