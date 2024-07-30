import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('First event listener');
});

myEmitter.on('myEvent', () => {
    console.log('Second event listener');
});

myEmitter.on('otherEvent', () => console.log('Other event'));

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(20);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.eventNames());

setTimeout(() => myEmitter.emit('myEvent'), 1000);
