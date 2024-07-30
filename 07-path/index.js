const path = require('path');

const filePath = '/Users/inik/Desktop/work/nodejs/index.js';
const textFilePath = '/Users/inik/Desktop/work/nodejs/text.txt';
const relativePath = './nodejs/movie.mov';
const directoryPath = './nodejs/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(textFilePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); //index.js
console.log(path.basename(directoryPath)); //subfolder

console.log(path.dirname(filePath)); // /Users/inik/Desktop/work/nodejs
console.log(path.dirname(directoryPath)); // ./nodejs

console.log(path.resolve(relativePath)); // /Users/inik/Desktop/work/nodejs/nodejs/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));

const parsedFile = path.parse(filePath);
console.log(path.join(parsedFile.dir, `rename-${parsedFile.name}.mjs`));
