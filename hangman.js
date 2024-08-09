// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const listOfWords = ['python','java','swift','javascript'];

let numOfWins = 0;
let numOfDefeats = 0;

function startGame(){
  intro();
  console.log(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: 
  `);
  let respond = input();
  while(respond !== 'exit'){
    switch(respond){
      case `play`:
        let answer = listOfWords[Math.floor(Math.random() * listOfWords.length)];
        let blankSpace = '-'.repeat(answer.length);
        console.log(blankSpace);
        let numOfAttempts = 8;
        checkLetter(answer, blankSpace, numOfAttempts);
        break;
      case `results`:
        console.log(`You won: ${numOfWins} times.`);
        console.log(`You lost: ${numOfDefeats} times.`);
        break;
    }
    console.log(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: 
  `);
    respond = input();
  }
}

function checkLetter(answer, blankSpace, numOfAttempts){
  while (numOfAttempts > 0){
    let occuredLetters = [];
    console.log(`Input a letter: 
    `);
    let guessedLetter = input();
    if (occuredLetters.some((element) => element === guessedLetter)){
      console.log(`You've already guessed this letter.
      `);
      console.log(`${blankSpace}`);
    }
    else if (guessedLetter.length !== 1){
      console.log(`Please, input a single letter.
      `);
      console.log(`${blankSpace}`);
    }
    else if(!(/^[a-z]+$/.test(guessedLetter))){
      console.log(`Please, enter a lowercase letter from the English alphabet.
      `);
      console.log(`${blankSpace}`);
    }
    else if (answer.includes(guessedLetter)){
      if (blankSpace.includes(guessedLetter)){
        if (blankSpace === answer){
          numOfWins += 1;
          console.log(`You guessed the word ${blankSpace}!`);
          console.log(`You survived!`);
          break;
        }
        else {
          occuredLetters.push(guessedLetter);
          console.log(`You've already guessed this letter.
          `);
          console.log(`${blankSpace}`);
        }
      }
      else {
        for (let index = 0; index < answer.length; index++){
          if (answer[index] === guessedLetter){
            blankSpace = blankSpace.substring(0, index) + guessedLetter + blankSpace.substring(index + 1);
          }
        }
        occuredLetters.push(guessedLetter);
        if (blankSpace === answer) {
          numOfWins += 1;
          console.log(`You guessed the word ${blankSpace}!`);
          console.log(`You survived!`);
          break;
        }
        else {
          console.log(`${blankSpace}`);
        }
      }
    }
    else {
       occuredLetters.push(guessedLetter);
       console.log(`That letter doesn't appear in the word.
       `);
       console.log(`${blankSpace}`);
       numOfAttempts -= 1;
     }
}
  if (numOfAttempts === 0){
    numOfDefeats += 1;
    console.log(`You lost!`);
  }
}

function compare(str1, str2){
  let comparison = str1.localeCompare(str2);
  console.log(comparison === 0 ? 'You survived!' : 'You lost!');
}
function intro(){
  console.log(`H A N G M A N`);
  // console.log(`The game will be available soon.`);
}

startGame();
