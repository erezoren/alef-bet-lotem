const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({erez: "oren"});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);