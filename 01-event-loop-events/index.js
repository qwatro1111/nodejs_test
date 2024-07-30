const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

console.log('Start');

// Close events
fs.writeFile('./test.txt', 'Hello Note.js', () => info('Write file'));

// Promises
Promise.resolve().then(() => info('Promise 1'));

// Next tick
process.nextTick(() => info('Next tick 1'));

// Set immediate (check)
setImmediate(() => info('Immediate 1'));

// Timeouts
setTimeout(() => info('Timeout 1'), 0);
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'));
    info('Timeout 2');
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 3) clearInterval(intervalId);
}, 50);

// Input/Output events
dns.lookup('google.com', (error, address, family) => {
    info('DNS 1 google.com');
});
dns.lookup('localhost', (error, address, family) => {
    info('DNS 2 localhost');
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 3'));
});

console.log('End');
