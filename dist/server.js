const express = require('express');
const app = express();

// Host the dist folder
app.use(express.static('dist'));

// Secret message route
app.get('/message', (req, res) => {
  res.send('This is a secret message!');
});

// Start the server on port 3000
app.listen(3000);