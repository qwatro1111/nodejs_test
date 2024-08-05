import stream, { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, callback) {
        const upperCase = chunk.toString().toUpperCase();
        callback(null, upperCase);
    },
});

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        const arrayOfCharts = chunk.toString().split('');
        const lasrChart = arrayOfCharts.pop();
        const reverse = arrayOfCharts.reverse().concat(lasrChart).join('');
        callback(null, reverse);
    },
});
process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// // Pipe to file
// process.stdin.pipe(writeStream);
// // Pipe to stduot
// process.stdin.pipe(process.stdout);
