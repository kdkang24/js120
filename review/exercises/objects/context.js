// ORIGINAL BUGGY CODE

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// BINDING OUTER SCOPE
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// ARROW FUNCTION
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(number => `${this.name} ${number}`);
//   },
// };

// USING thisArg OPTIONAL PARAMETER
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// HARD BINDING
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());