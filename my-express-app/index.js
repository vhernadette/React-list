const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
