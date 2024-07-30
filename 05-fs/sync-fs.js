const fs = require('fs');

try {
    fs.writeFileSync('./first.txt', 'First file text');
    console.log('File first.txt was written');
    fs.appendFileSync('./first.txt', '\nOne more line');
    console.log('Appended text to the first.txt');
    fs.renameSync('./first.txt', './rename-first.txt');
    console.log('File was renamed');
} catch (err) {
    console.log(err);
}
