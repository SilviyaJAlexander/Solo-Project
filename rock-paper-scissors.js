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
        break;
     
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
    default:
        console.log('Invalid choice');
        break;
     
}
//Decision Structure
console.info("Decision Structure!!!!");
let winner;
if (choice === computerChoice){
    console.log("It's a Tie");
    winner = 'DRAW';
}   
else {
    if( choice ==1 && computerChoice ==2 ||  (computerChoice == 1 && choice ==2)){
        winner= 2; //paper wins
    }
    else if( choice ==1 && computerChoice ==3 ||  (computerChoice == 1 && choice ==3)){
        winner= 1; // rock wins
    }
    else if( choice ==2 && computerChoice ==3 ||  (computerChoice == 2 && choice ==3)){
        winner= 3; // scissors wins
    }

}
//who wins?
if (winner == choice){
    console.log('User wins');
}
else{
    console.log('Computer wins')
} 
const readline = require.readline();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
}
function askToContinue(){
console.log('Do you want to continue playing? (Y|N:');

rl.question('',(toContinue)=> {
    if( toContinue.toUpperCase() =='N'){
    console.log('Game ends');
    rl.close();
    }
    else{
        console.log('Starting a new game...')
        startGame();
        }
});

}   
     



