/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */

const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    //Add score property to generic player object
    score: 0,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  //Changed `choices` into a property of `computerObject` so that it can be modified
  let computerObject = {
    choices: ['rock', 'paper', 'scissors'],

    choose() {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIndex];
    }
  };

  return Object.assign(playerObject, computerObject);
}


function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose Rock, Paper, or Scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  //Array to keep track of move history and outcomes
  moveHistory: [],

  adjustComputerChoice() {
    //Readjust choice weights after each `ADJUSTMENT_INTERVAL` number of games
    //Changed var `choices` in computerObject into a property (Completed above)
    //`choices` array will have additional choices added every `ADJUSTMENT_INTERVAL`
    //The move with the highest cumulative loss rate at every `ADJUSTMENT_INTERVAL`
    //will not be added to `choices` for that iteration

    //Potential issues
    //`choices` array may grow excessively long if many games are played
    const ADJUSTMENT_INTERVAL = 5;
    let historyLength = this.moveHistory.length;
    if (historyLength > 0 && historyLength % ADJUSTMENT_INTERVAL === 0) {
      let lossRates = this.calculateLossRates();
      let choices = ['rock', 'paper', 'scissors'];

      //Sort loss rates object to get highest loss rate move at index 0
      lossRates = Object.entries(lossRates).sort((a, b) => b[1] - a[1]);

      //Find index of highest loss rate move and remove that move
      //This will reduce the probability of it being selected by the computer
      let biggestLoser = choices.indexOf(lossRates[0][0]);
      choices.splice(biggestLoser, 1);
      this.computer.choices = this.computer.choices.concat(choices);
    }
    console.log(this.computer.choices);
  },

  calculateLossRates() {
    let rockLossRate = 0;
    let paperLossRate = 0;
    let scissorsLossRate = 0;
    let totalGames = this.moveHistory.length;

    this.moveHistory.forEach(move => {
      if (move.Computer === 'ROCK' && move.Winner === 'You') {
        rockLossRate += 1;
      } else if (move.Computer === 'PAPER' && move.Winner === 'You') {
        paperLossRate += 1;
      } else if (move.Computer === 'SCISSORS' && move.Winner === 'You') {
        scissorsLossRate += 1;
      }
    });

    rockLossRate /= totalGames;
    paperLossRate /= totalGames;
    scissorsLossRate /= totalGames;

    return {
      rock: rockLossRate,
      paper: paperLossRate,
      scissors: scissorsLossRate,
    };
  },

  checkWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    //moveInfo object to be added to moveHistory after each game
    let moveInfo = {
      You: humanMove.toUpperCase(),
      Computer: computerMove.toUpperCase(),
    };

    console.log('---------------------------------');
    console.log(`You chose: ${humanMove.toUpperCase()}`);
    console.log(`The computer chose: ${computerMove.toUpperCase()}`);
    console.log('---------------------------------');

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.human.score += 1;
      moveInfo.Winner = 'You';

    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.computer.score += 1;
      moveInfo.Winner = 'Computer';
    } else {
      console.log("It's a tie.");
      moveInfo.Winner = 'Tie';
    }
    this.moveHistory.push(moveInfo);
    console.log(`The new score: You - ${this.human.score} and Computer - ${this.computer.score}`);
  },

  //New method to check if either player has enough wins to be grand champion
  checkForGrandChampion() {
    const GRAND_CHAMPION_WINCOUNT = 5;
    if (this.human.score === GRAND_CHAMPION_WINCOUNT) {
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
      console.log(`Congratulations! You have beaten the computer ${GRAND_CHAMPION_WINCOUNT} times! You are the GRAND CHAMPION!`);
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
      this.human.score = 0;
      this.computer.score = 0;
    } else if (this.computer.score === GRAND_CHAMPION_WINCOUNT) {
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
      console.log(`The computer has beaten you ${GRAND_CHAMPION_WINCOUNT} times! The computer is the GRAND CHAMPION!`);
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
      this.human.score = 0;
      this.computer.score = 0;
    }
  },

  //New method to display game info (current score and move history)
  displayGameInfo() {
    console.log(`The current score: You - ${this.human.score} and Computer - ${this.computer.score}`);
    if (this.moveHistory.length > 0) {
      let last = this.moveHistory.length - 1;
      console.log('============================================');
      console.log(`Details from previous game:`);
      console.log(`You picked ${this.moveHistory[last]['You']}, the Computer picked ${this.moveHistory[last]['Computer']}.`);
      console.log('============================================');
    }
  },

  displayWelcomeMessage() {
    console.log('=================================');
    console.log('Welcome To Rock, Paper, Scissors!');
    console.log('=================================');
  },

  displayGoodbyeMessage() {
    console.log('==================================================');
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
    console.log('==================================================');
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.displayGameInfo();
      this.human.choose();
      this.computer.choose();
      this.checkWinner();
      this.checkForGrandChampion();
      this.adjustComputerChoice();
      //Added some logic to clear console between rounds
      if (!this.playAgain()) {
        console.clear();
        break;
      } else {
        console.clear();
      }
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();

