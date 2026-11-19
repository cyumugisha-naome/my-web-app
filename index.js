
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to User Authentication Page');
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, this is a basic web app!');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
