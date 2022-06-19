// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName);

// SOLUTION 1
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;

//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// SOLUTION 2 - Pass hard bound anonymous function to map
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());

/*
Should return
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
*/