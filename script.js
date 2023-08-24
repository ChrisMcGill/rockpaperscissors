// play game button
// button runs function of game
// take input of player
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


};

function getComputerChoice(){
    let computerChoice;
    computerChoice = Math.floor(Math.random()*100);
    return computerChoice

}

console.log(getComputerChoice())