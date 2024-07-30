const myName = 'John Doe';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 1;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
