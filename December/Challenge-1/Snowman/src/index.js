const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
