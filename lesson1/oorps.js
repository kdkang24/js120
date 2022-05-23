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
      const choices = ['rock', 'paper', 'scissors'];
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
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
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

  displayWelcomeMessage() {
    console.log('Welcome To Rock, Paper, Scissors!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.human.score += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie");
    }
    console.log(`The current score: You - ${this.human.score} and Computer - ${this.computer.score}`);
  },

  //New method to check if either player has reached 5 points
  checkForGrandWinner() {
    const GRAND_CHAMPION_WINCOUNT = 5;
    if (this.human.score === GRAND_CHAMPION_WINCOUNT) {
      console.log(`Congratulations! You have beaten the computer ${GRAND_CHAMPION_WINCOUNT} times! You are the GRAND CHAMPION!`);
      this.human.score = 0;
      this.computer.score = 0;
    } else if (this.computer.score === GRAND_CHAMPION_WINCOUNT) {
      console.log(`The computer has beaten you ${GRAND_CHAMPION_WINCOUNT} times! The computer is the GRAND CHAMPION!`);
      this.human.score = 0;
      this.computer.score = 0;
    }
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
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

RPSGame.play();

