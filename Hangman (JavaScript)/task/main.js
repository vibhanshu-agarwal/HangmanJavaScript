// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
const console = require("node:console");


let msg = `
H A N G M A N
`;

console.info(msg);

let menuOption = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);
let wins = 0;
let losses = 0;

function playGame() {
    let wordArray = ['python', 'java', 'swift', 'javascript'];
    let wordByComputer = wordArray[Math.floor(Math.random() * wordArray.length)];

// Show hyphens instead of the letters
    let wordToShow = '-'.repeat(wordByComputer.length);
    console.log(wordToShow);

    let lettersTried = new Set();
    let invalidAttempts = 0;

    while (invalidAttempts < 8 && wordToShow.includes('-')) {
        let letterByUser = input(`Input a letter:`);

        if (letterByUser.length !== 1) {
            console.log("Please, input a single letter.");
            console.log();
            console.log(wordToShow);
            continue;
        }

        // Check whether the letter is lowercase
        if (!/^[a-z]$/.test(letterByUser)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
            console.log();
            console.log(wordToShow);
            continue;
        }

        if (lettersTried.has(letterByUser)) {
            console.log("You've already guessed this letter.");
            console.log();
            console.log(wordToShow);
            continue;
        }
        lettersTried.add(letterByUser);

        let found = false;
        wordToShow = wordByComputer.split('').map((char, index) => {
            if (char.toLowerCase() === letterByUser.toLowerCase()) {
                found = true;
                return char;
            } else {
                return wordToShow[index];
            }
        }).join('');

        if (!found) {
            invalidAttempts++;
            console.log("That letter doesn't appear in the word.");
            console.log();
        }

        console.log();
        console.log(wordToShow);
    }

    if (wordToShow.includes('-')) {
        console.log("You lost!");
        losses++;
    } else {
        console.log(`You guessed the word ${wordByComputer}!`);
        console.log("You survived!");
        wins++;
    }
}

function showResults() {
    console.log(`You won: ${wins} times.`);
    console.log(`You lost: ${losses} times.`);
}

while (menuOption !== 'exit') {
    if (menuOption === 'play') {
        playGame();
    } else if (menuOption === 'results') {
        showResults();
    }
    // else {
    //     console.log("Please, enter a valid option.");
    //     menuOption = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);
    // }
    menuOption = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);
    if (menuOption === 'exit') {
        wins = 0;
        losses = 0;
    }
}











