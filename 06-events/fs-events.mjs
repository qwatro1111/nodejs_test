import EventEmitter from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();
const filePath = './first.txt';

fileEmitter.on('writeComplete', () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmitter.emit('appendComplete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log(`Appended text to the ${filePath}`);
    fs.rename(filePath, './rename-first.txt', () => {
        fileEmitter.emit('renameComplate');
    });
});

fileEmitter.on('renameComplate', () => {
    console.log('File was renamed');
});

fs.writeFile(filePath, 'First file text', () => {
    fileEmitter.emit('writeComplete');
});
