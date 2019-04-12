const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/author', (req, res) => {
  return res.status(200).json({
    message: 'Hey, I\'m glad you found this one! My name is Matheus Genteluci!'
  });
});

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello, this is the root endpoint!',
    mayInterestYou: 'There are many hidden endpoints you can try and find!',
    finalMessage: 'Good Luck and Have Fun!'
  });
});

app.listen(3000, () => console.log('Server up and running at port 3000'));
