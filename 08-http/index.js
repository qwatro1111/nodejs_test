const http = require('http');
const PORT = 3001;
const comments = [
    { id: 1, text: 'First comment', author: 'Bob' },
    { id: 2, text: 'Second comment', author: 'Martin' },
    { id: 3, text: 'Third comment', author: 'Peter' },
];
const server = http.createServer((req, res) => {
    if (req.url === '/html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><div>');
        res.write('<h1>Greetings from the HTTP server!</h1>');
        res.write('</div></body></html>');
        return res.end();
    }
    if (req.url === '/text') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('This is plain text!');
    }
    if (req.url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(comments));
        return res.end();
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    return res.end('<h1>Page not found!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
