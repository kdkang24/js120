// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//   a: 'abc',
//   b: 'def',
//   add: function() {
//     return this.a + this.b;
//   },
// };

// console.log(bar.add.call(foo));

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

//Using call method
// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

//Using bind method
// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription.bind(turk));

//Using let self = this;
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

//Using forEach optional argument
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

//Using arrow function
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    };

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

let obj = {
  foo() {
    return this;
  },
};

console.log(obj.foo());