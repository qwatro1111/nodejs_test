const {
    myName,
    myHobbies,
    myFavoriteNumber,
} = require('./my-modules/multiple-exports');
const greetingFn = require('./my-modules/single-export');
const {
    myName: myOherName,
    myFriendsName,
    myGreatHobbies,
} = require('./my-modules/export-and-import');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// Mutates array in the multiple-exports module!
myHobbies.push('climbing');

// Import from single-export
greetingFn(myName);

// Imports from export-and-import
console.log(myOherName);
console.log(myFriendsName);
console.log(myGreatHobbies);

// console.log(arguments.callee.toString());
// console.log('Somesing text');
