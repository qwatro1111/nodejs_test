const randomInt = require("./random_int");

module.exports = function(len = 10) {
    let temp = [];
    for (let i = 1; i < len; i++) temp.push(randomInt());

    return temp;
}