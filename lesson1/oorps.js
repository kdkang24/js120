/* eslint-disable complexity */
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

  let computerObject = {
    choose() {
      //Additional choices added to computer movelist
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
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
        //Additional choices added to human movelist
        console.log('Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSLS_GAME = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome To Rock, Paper, Scissors, Lizard, Spock!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    //Updated winning conditions
    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
    (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'spock')) ||
    (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
    (humanMove === 'lizard' && (computerMove === 'spock' || computerMove === 'paper')) ||
    (humanMove === 'spock' && (computerMove === 'scissors' || computerMove === 'rock'))) {
      console.log('You win!');
      this.human.score += 1;
    } else if (humanMove === computerMove) {
      console.log("It's a tie");

    } else {
      console.log('Computer wins!');
      this.computer.score += 1;
    }
    console.log(`The current score: You - ${this.human.score} and Computer - ${this.computer.score}`);
  },

  //New method to check if either player has reached 5 points
  checkForGrandWinner() {
    if (this.human.score === 5) {
      console.log('Congratulations! You have beaten the computer 5 times! You are the GRAND WINNER!');
      this.human.score = 0;
      this.computer.score = 0;
    } else if (this.computer.score === 5) {
      console.log('The computer has beaten you 5 times! The computer is the GRAND WINNER!');
      this.human.score = 0;
      this.computer.score = 0;
    }
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.checkForGrandWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSLS_GAME.play();

