const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/login', (req, res) => {
    res.send(`
      <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Enter Username" required>
        <button type="submit">Login</button>
      </form>
    `);
  });
  
app.post('/login', (req, res) => {
    const { username } = req.body;
    // Store username in local storage (on the client-side)
    const messages = fs.readFileSync('messages.txt', 'utf-8');
    res.send(`
        <pre>${messages}</pre>
      <script>
        localStorage.setItem('username', '${username}');
        window.location.href = '/';
       
      </script>
       
    `);
});
app.get('/', (req, res) => {
    res.send(`
      <form action="/send-message" method="POST">
        <input type="text" name="message" placeholder="Enter Message" required>
        <button type="submit">Send</button>
      </form>
    `);
  });
  
app.post('/send-message', (req, res) => {
    console.log(req.body)
    const username = req.body.username || 'Anonymous';
    const message = req.body.message;
  
    // Store message with username
    fs.appendFileSync('messages.txt', `${username}: ${message}\n`);
  
    res.redirect('/');
  });
  

// app.get('/messages', (req, res) => {
//     res.send();
//   });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});