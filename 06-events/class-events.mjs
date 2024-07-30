import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(authhor, text) {
        super();
        this.authhor = authhor;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your post`);
        });
        this.on('error', (error) => {
            console.error(error);
        });
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request!')
            );
        }
        this.likesQty++;
        this.emit('likePost', username);
    }
}

const myPost = new Post('John Doe', 'First post');

// console.log(myPost.authhor);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like('Bob');
setTimeout(() => myPost.like('Jack'), 1000);
setTimeout(() => myPost.like(), 1500);
setTimeout(() => myPost.like('Peter'), 2000);
// console.log(myPost.likesQty);
