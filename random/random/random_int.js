module.exports = function (min = 1, max = 100) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}