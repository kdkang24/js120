// let book1 = {
//   title: "Mythos",
//   author: "Stephen Fry",

//   getDescription() {
//     this.getDescription = console.log(`${this.title} was written by ${this.author}.`);
//   }
// };

// let book2 = {
//   title: "Me Talk Pretty One Day",
//   author: "David Sedaris",

//   getDescription() {
//     this.getDescription = console.log(`${this.title} was written by ${this.author}.`);
//   }
// };

// let book3 = {
//   title: "Aunts aren't Gentlement",
//   author: "PG Wodehouse",

//   getDescription() {
//     this.getDescription = console.log(`${this.title} was written by ${this.author}.`);
//   }
// };

function createBook(title, author, read = false) {
  let book = {
    title: title,
    author: author,
    read: read,

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${this.read ? "have" : "haven't"} read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
  return book;
}

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
// book1.readBook();
// console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

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
