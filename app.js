const express = require('express');
const ejs = require('ejs');
const configViewEngine = require('./src/config/viewEngine');

const app = express();
const port = 3000;

configViewEngine(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});