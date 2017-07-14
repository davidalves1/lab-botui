const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`${port} is the magic port`);