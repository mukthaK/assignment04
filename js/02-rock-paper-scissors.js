function getUserChoice() {
    do {
        let userChoice = prompt('Enter your choice rock/paper/scissor - (r/p/s)', 'r');
        if (userChoice === 'r' || userChoice === 'p' || userChoice === 's'){
            return userChoice;
        }
    } while (true);
}
function getComChoice() {
    let choice;
    let comChoice = Math.round(Math.random()*2); //Generates a whole random number between 0 and 2
    if (comChoice === 0){
        choice = 'r';
    } else if (comChoice === 1){
        choice = 'p';
    } else {
        choice = 's';
    }
    // console.log(comChoice);
    // console.log(choice);
    return choice;   
}
function playGame() {
    let userChoice = getUserChoice();
    let choice = getComChoice();
    if (userChoice === choice){
        alert('Its a tie');
    } else if (userChoice === 'r') {
        if(choice === 'p'){
            alert('Computer won!');
        } else {
            alert('You win!');
        }
    } else if (userChoice === 'p'){
        if (choice === 'r'){
            alert('You win!');
        } else {
            alert('Computer won!');
        }
    } else if (userChoice === 's') {
        if (choice === 'r'){
            alert('Computer won!');
        } else {
            alert('You win!');
        }
    }
    return;
}
function init() {
    let playAgain = 'y';
    do {
        playGame();
        playAgain = prompt('Would you like to play again? (y/n)', 'y');
    } while (playAgain === 'y');
    alert('Bye!');
}
init();