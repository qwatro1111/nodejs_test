const fs = require('fs');
const qs = require('querystring');
const comments = require('./data');

function getHome(req, res) {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loading HTML file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Greetings from the HTTP server!</h1>');
    res.write('</div></body></html>');
    res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is plain text!');
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(comments));
    res.end();
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                let comment = qs.parse(body);
                comment.id = parseInt(comment.id);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Comment data was received</h1>');
                res.write('<a href="/">Submit more one comment</a>');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid form ');
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';

        req.on('data', (chunk) => {
            commentJSON += chunk;
        });

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end('Comment data was received');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be in the JSON format');
    }
}

function hendleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Page not found!</h1>');
}

module.exports = {
    getHome,
    getHTML,
    getText,
    getComments,
    postComment,
    hendleNotFound,
};
