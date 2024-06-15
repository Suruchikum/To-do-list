const express = require('express');
const cors = require("cors");
const app = express();



require('./config/database');

const auth = require('./routes/auth');
const list = require('./routes/list');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello, world!!");
});
app.post('/signup', (req, res) => {
    // signup logic here
    res.send('Signup successful');
  });
  


// setting up a middleware function for the authentication.
app.use('/api/v1', auth);

// setting up a middleware function for the todo list
app.use('/api/v2', list);

// starting the server that listens on port 8000.
app.listen(8000, () => {
    console.log("Server Started!!!");
});