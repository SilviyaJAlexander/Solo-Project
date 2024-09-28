//Implementation of Rock-paper-scissors game
/*intially  2 players computer move, user move-
multiplayers*/


console.info("Reading input!!!!");
console.log("Enter your choice \n 1. Rock \n 2. Paper\n 3. Scissors")
let choice = process.argv[2];
choice = parseInt(choice);
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
console.info("Decision Structure!!!!");
let winner;
if (choice === computerChoice){
    console.log("It's a Tie");
}   
else {
    if( choice ==1 && computerChoice ==2 ||  (computerChoice == 1 && choice ==2)){
        winner= 'Paper';
    }
    else if( choice ==1 && computerChoice ==3 ||  (computerChoice == 1 && choice ==3)){
        winner= 'Rock';
    }
    else if( choice ==2 && computerChoice ==3 ||  (computerChoice == 2 && choice ==3)){
        winner= 'Scissors';
    }

}
//who wins?
if (winner){
    

}
