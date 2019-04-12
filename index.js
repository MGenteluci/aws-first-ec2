const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authorRoute = require('./app/routes/author');
const healthRoute = require('./app/routes/health');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/author', authorRoute);
app.get('/health', healthRoute);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello, this is the root endpoint!',
    mayInterestYou: 'There are many hidden endpoints you can try and find!',
    finalMessage: 'Good Luck and Have Fun!'
  });
});

app.listen(3000, () => console.log('Server up and running at port 3000'));
