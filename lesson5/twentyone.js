//readline-sync module for user input
const readline = require("readline-sync");

class Deck {
  constructor() {
    this.cards = [];
    this.shuffled = false;
  }

  createFreshDeck() {
    const CARD_KEYS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const CARD_VALUES = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10];
    const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];

    //Reset this.deck to empty array
    this.cards = [];
    this.shuffled = false;

    CARD_SUITS.forEach(suit => {
      for (let index = 0; index < CARD_KEYS.length; index++) {
        let card = {};
        card[`${CARD_KEYS[index]} of ${suit}`] = CARD_VALUES[index];
        this.cards.push(card);
      }
    });
  }

  shuffle() {
    this.shuffled = true;
    for (let index = this.cards.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [this.cards[index], this.cards[otherIndex]] =
      [this.cards[otherIndex], this.cards[index]]; // swap elements
    }
  }

  deal(player, dealer) {
    player.hand.push(this.cards.shift());
    dealer.hand.push(this.cards.shift());
    player.hand.push(this.cards.shift());
    dealer.hand.push(this.cards.shift());
  }
}

class Participant {
  constructor() {
    this.hand = [];
    this.winCount = 0;
  }

  hit(deck) {
    let newCard = deck.cards.shift();
    console.log(`==> ${this.name} drew the ${Object.keys(newCard)[0]}!`);
    this.hand.push(newCard);
  }

  score() {
    let total = 0;
    let aces = 0;
    this.hand.forEach(card => {
      for (let key in card) {
        total += card[key];
        //Check for Aces
        if (Object.keys(card)[0].includes('Ace')) {
          aces += 1;
        }
      }
    });
    //Modify for Aces
    while (aces > 0) {
      if (total > 21) {
        total -= 10;
      }
      aces -= 1;
    }
    return total;
  }

  isBusted() {
    return this.score() > 21;
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.name = 'You';
    this.dollars = 5;
  }

  hit(deck) {
    //Added console.clear() to Player's hit() for better interface
    console.clear();
    let newCard = deck.cards.shift();
    console.log(`==> ${this.name} drew the ${Object.keys(newCard)[0]}!`);
    this.hand.push(newCard);
  }

  // stay() {
  //   console.log(`You have chosen to stay. Your score is ${this.score()}. It is now the Dealer's turn.`);
  // }

  showCards() {
    console.log('Your cards are:');
    this.hand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
    console.log(`==> The total of your cards is ${this.score()}.\n`);
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.name = 'The Dealer';
  }

  // stay() {
  //   console.log("The Dealer stays at 17 or higher.");
  // }

  showInitialCards() {
    console.log("The Dealer's cards are:");
    console.log(`- ${Object.keys(this.hand[0])[0]}`);
    console.log('- *** HIDDEN CARD ***');
    console.log('');
  }

  reveal() {
    console.log("The Dealer's cards are:");
    this.hand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
    console.log(`==> The total of the Dealer's cards is ${this.score()}.\n`);
  }
}


class TwentyOneGame {
  constructor(deck, player, dealer) {
    this.deck = deck;
    this.player = player;
    this.dealer = dealer;
    this.winner = null;
  }

  start() {
    while (true) {
      this.displayWelcomeMessage();
      this.dealCards();
      this.showCards();
      this.playerTurn();
      if (this.winner !== this.dealer) {
        this.dealerTurn();
      }
      this.determineWinner();
      this.displayResult();
      //Loop to play again
      if (this.playAgain()) {
        break;
      }
    }
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //Create fresh deck and reset winner
    this.deck.createFreshDeck();
    this.deck.shuffle();
    this.winner = null;
    this.player.hand = [];
    this.dealer.hand = [];
    this.deck.deal(this.player, this.dealer);
  }

  showCards() {
    //Dealer cards shown first with hidden card
    this.dealer.showInitialCards();
    //Player cards shown at the bottom
    this.player.showCards();
  }

  playerTurn() {
    const PLAYER_CHOICES = ['hit', 'stay', 'h', 's'];
    let decision = 'Would you like to hit or stay [h/s]? ';
    let playerAnswer = readline.question(decision);
    //Basic input validation
    while (!PLAYER_CHOICES.includes(playerAnswer.toLowerCase())) {
      console.log("That's not a valid choice.");
      playerAnswer = readline.question(decision);
    }

    while (playerAnswer[0] !== "s") {
      this.player.hit(this.deck);
      this.showCards();

      if (this.player.isBusted()) {
        console.log(`==> You went over 21. You've busted out!`);
        this.winner = this.dealer;
        break;
      }
      playerAnswer = readline.question(decision);
    }
  }

  dealerTurn() {
    console.clear();
    // // Player's stay() method called for score display only
    // this.player.stay();
    this.displayDealerTurnMessage();
    this.dealer.reveal();
    while (this.dealer.score() < 17) {
      this.dealer.hit(this.deck);
      this.dealer.reveal();
    }
    if (this.dealer.isBusted()) {
      console.log(`==> The Dealer went over 21. He's busted out!`);
      this.winner = this.player;
    }
  }

  determineWinner() {
    //This will only execute if neither player nor dealer has busted
    
    if (this.winner === null) {
      console.log(`Your score is ${this.player.score()}. The Dealer's score is ${this.dealer.score()}.`);
      if (this.player.score() > this.dealer.score()) {
        this.winner = this.player;
      } else if (this.dealer.score() > this.player.score()) {
        this.winner = this.dealer;
      } else {
        this.winner = "It's a tie";
      }
    }
  }

  displayResult() {
    const PLAYER_VICTORY = '*** CONGRATULATIONS! YOU WIN! ***';
    const DEALER_VICTORY = '*** Sorry, the dealer wins. ***';
    if (this.winner === this.player) {
      console.log(PLAYER_VICTORY);
    } else if (this.winner === this.dealer) {
      console.log(DEALER_VICTORY);
    } else {
      //In case of tie
      console.log(this.winner);
    }
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('==========================================');
    console.log('*** Welcome to the game of Twenty One! ***');
    console.log('==========================================');
  }

  displayGoodbyeMessage() {
    console.log('======================================');
    console.log('*** Thanks for playing Twenty One! ***');
    console.log('======================================');
  }

  displayDealerTurnMessage() {
    console.log('===================================');
    console.log(`*****      DEALER'S TURN      *****`);
    console.log('===================================');
  }

  playAgain() {
    let answer = readline.question('Do you want to play again? [y/n] ').toLowerCase();
    while (!['y', 'yes', 'n', 'no'].includes(answer)) {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    return (answer[0] === 'n');
  }
}

let game = new TwentyOneGame(new Deck(), new Player(), new Dealer());
game.start();