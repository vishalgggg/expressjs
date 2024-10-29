const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World! ko');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
