//Implementation of Rock-paper-scissors game
/*intially  2 players computer move, user move-
multiplayers*/


console.info("Reading input");
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
let computerChoice = Math.floor(Math.random() * 4);