//Implementation of Rock-paper-scissors game
//intially  2 players computer move, user move-


function startGame(){
console.info("Reading input!!!!");
console.log("Enter your choice \n 1. Rock \n 2. Paper\n 3. Scissors")
let choice = process.argv[2];
choice = parseInt(choice);
// User choice display
switch (choice) {
    case 1: 
        console.log('Rock');
        break;
    case 2: 
        console.log('Paper');
        break;   
    case 3: 
        console.log('Scissors');
        break; 
    default:
        console.log('Invalid choice');
        return;
     
}
console.log(`User choice is: ${choice}`);

//Computer's Choice
console.log("Now it's computers turn...!");
let computerChoice = Math.floor(Math.random() * 3) +1;
switch (computerChoice) {
    case 1: 
        console.log('Rock');
        break;
    case 2: 
        console.log('Paper');
        break;   
    case 3: 
        console.log('Scissors');
        break; 
    
     
}
//Decision Structure
console.info("Decision Structure!!!!");

if (choice === computerChoice){
    console.log("It's a Tie");
   askToContinue();
   return;
}  
let winner;
    if ((choice === 1 && computerChoice === 3) || // Rock beats Scissors
        (choice === 2 && computerChoice === 1) || // Paper beats Rock
        (choice === 3 && computerChoice === 2)) { // Scissors beats Paper
        winner = 'User';
    } else {
        winner = 'Computer';
    }
//who wins?
if (winner == 'User') {
    console.log('User wins');
} else {
    console.log('Computer wins');
}
askToContinue();
}


function askToContinue(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Do you want to continue playing? (Y|N:',(toContinue)=> {
        if( toContinue.toUpperCase() =='N') {
        console.log('Game ends');
        console.log('Thank you for playing. Welcome back next time...!');
        rl.close();
        }
        else{
            console.log('Starting a new game...')
            rl.close();
            startGame();
            }
    });

}   
startGame();
     



